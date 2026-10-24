<script setup>
// Le contenu de chaque onglet reste dans le HTML rendu côté serveur, avec l’attribut hidden sur les onglets inactifs. Le texte est donc présent pour les moteurs de recherche.

const props = defineProps({
  tabs: { type: Array, required: true },
  label: { type: String, default: '' },
})

const active = ref(props.tabs[0]?.id)
const current = computed(() =>
  props.tabs.some((tab) => tab.id === active.value) ? active.value : props.tabs[0]?.id,
)
const tabEls = {}

function select(id, focus = false) {
  active.value = id
  if (focus) nextTick(() => tabEls[id]?.focus())
}

function onKeydown(e, index) {
  const last = props.tabs.length - 1
  const moves = {
    ArrowRight: index === last ? 0 : index + 1,
    ArrowLeft: index === 0 ? last : index - 1,
    Home: 0,
    End: last,
  }
  if (!(e.key in moves)) return
  e.preventDefault()
  select(props.tabs[moves[e.key]].id, true)
}
</script>

<template>
  <div>
    <div role="tablist" :aria-label="label" class="mb-6 flex overflow-x-auto border-b">
      <button
        v-for="(tab, i) in tabs"
        :id="`tab-${tab.id}`"
        :key="tab.id"
        :ref="
          (el) => {
            tabEls[tab.id] = el
          }
        "
        type="button"
        role="tab"
        :aria-selected="current === tab.id"
        :aria-controls="`panel-${tab.id}`"
        :tabindex="current === tab.id ? 0 : -1"
        class="shrink-0 px-3 py-3 text-sm font-medium transition duration-600 border-b-4 border-b-transparent hover:border-b-4 hover:border-primary-foreground"
        :class="
          current === tab.id
            ? 'text-4xl relative border-b-4 border-primary-foreground border'
            : 'text-foreground '
        "
        @click="select(tab.id)"
        @keydown="onKeydown($event, i)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div
      v-for="tab in tabs"
      :id="`panel-${tab.id}`"
      :key="tab.id"
      role="tabpanel"
      :aria-labelledby="`tab-${tab.id}`"
      :hidden="current !== tab.id"
      tabindex="0"
    >
      <slot :name="tab.id" />
    </div>
  </div>
</template>

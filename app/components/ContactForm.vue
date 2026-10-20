// https://formbold.com/account/forms

<template>
  <form
    @submit.prevent="submitForm"
    id="contact"
    class="flex flex-col gap-4 max-w-452 not-first:mx-auto"
  >
    <!-- Email Address -->
    <div class="flex flex-col gap-2">
      <label for="email" class="text-sm">
        Email Address<span class="ml-0.5 text-danger-foreground">*</span>
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        v-model="form.email"
        required
        class="max-h-11 w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-base text-gray-900 transition-all placeholder:text-muted-foreground focus:border-[#5750f1] focus:ring-4 focus:ring-[#5750f1]/10 focus:outline-none"
      />
    </div>

    <!-- Subject -->
    <div class="flex flex-col gap-2">
      <label for="subject" class="text-sm">
        Subject<span class="ml-0.5 text-danger-foreground">*</span>
      </label>
      <input
        type="text"
        id="subject"
        placeholder="Enter your subject"
        v-model="form.subject"
        required
        class="max-h-11 w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-base text-gray-900 transition-all placeholder:text-muted-foreground focus:border-[#5750f1] focus:ring-4 focus:ring-[#5750f1]/10 focus:outline-none"
      />
    </div>

    <!-- Message -->
    <div class="flex flex-col gap-2">
      <label for="message" class="text-sm">
        Message<span class="ml-0.5 text-danger-foreground">*</span>
      </label>
      <textarea
        id="message"
        rows="5"
        placeholder="Type your message..."
        v-model="form.message"
        required
        class="w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 transition-all placeholder:text-muted-foreground focus:border-[#5750f1] focus:ring-4 focus:ring-[#5750f1]/10 focus:outline-none"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      :disabled="loading"
      class="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-accent-base bg-accent-foreground px-5 py-3 text-base font-medium text-primary-background shadow-xs transition-all hover:bg-accent-foreground/70 active:scale-[0.99] disabled:opacity-50"
    >
      {{ loading ? 'Submitting...' : 'Submit Message' }}
    </button>

    <!-- Status Message -->
    <p
      v-if="statusMessage"
      class="rounded-xl p-3 text-center text-sm font-medium bg-gray-50 text-gray-800"
    >
      {{ statusMessage }}
    </p>
  </form>
</template>

<script setup>
const form = reactive({
  email: '',
  subject: '',
  message: '',
})

const loading = ref(false)
const statusMessage = ref('')

async function submitForm() {
  loading.value = true
  try {
    const response = await $fetch('https://formbold.com/s/3O7rj', {
      method: 'POST',
      body: form,
    })
    statusMessage.value = response.message || 'Message sent successfully!'
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (err) {
    statusMessage.value = 'Failed to submit form.'
  } finally {
    loading.value = false
    setTimeout(() => (statusMessage.value = ''), 4000)
  }
}
</script>

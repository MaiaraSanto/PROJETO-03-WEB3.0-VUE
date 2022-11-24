<template>
    <nav class="mx-auto flex">
        <button 
          @click="$i18n.locale = locales[0]"
          class="transition-all hover:brightness-90 mr-4 box-border w-32 h-12 background-color: #27272A flex items-center justify-center rounded-2xl text-white-900  border: 1px solid #9d4b00  gap: 0.5rem  align-items: center  justify-content: space-around  margin-left: 3rem  padding: 1rem 1.9rem border: none border-radius: 0.8rem  height: 4.1rem "
        >
            <img class="mr-1" src="@/assets/icons/brazil.svg" alt=""/>
            Português
        </button>

        <button 
          @click="$i18n.locale = locales[1]"
          class="transition-all hover:brightness-90 mr-4 box-border w-32 h-12 background-color: #27272A flex items-center justify-center rounded-2xl text-white-900"
        >
            <img class="mr-1" src="@/assets/icons/english.svg" alt=""/>
            Inglês
        </button>

        <button 
          @click="$i18n.locale = locales[2]"
          class="transition-all hover:brightness-90 mr-4 box-border w-32 h-12 background-color: #27272A flex items-center justify-center rounded-2xl text-white-900"
        >
            <img class="mr-1" src="@/assets/icons/spanish.svg" alt=""/>
            Espanhol
        </button>
    </nav>
</template>

<script>
    export default {
        name: 'LocaleSwitcher',
        data() {
            return {
                locales: ["pt", "en", "es"],
            }
        }
    }
</script>
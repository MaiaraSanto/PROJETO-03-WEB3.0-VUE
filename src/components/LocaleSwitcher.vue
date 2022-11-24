<template>
    <nav class="mx-auto flex">
        <button 
          @click="$i18n.locale = locales[0]"
          class="height: 4.1rem
    background-color: #27272A
    border-radius: 0.8rem
    border: none
    padding: 1rem 1.9rem
    margin-left: 3rem
    display: flex
    justify-content: space-around
    align-items: center
    gap: 0.5rem
    border: 1px solid #9d4b00"
        >
            <img class="mr-1" src="@/assets/icons/brazil.svg" alt=""/>
            Português
        </button>

        <button 
          @click="$i18n.locale = locales[1]"
          class="height: 4.1rem
    background-color: #27272A
    border-radius: 0.8rem
    border: none
    padding: 1rem 1.9rem
    margin-left: 3rem
    display: flex
    justify-content: space-around
    align-items: center
    gap: 0.5rem
    border: 1px solid #9d4b00"
        >
            <img class="mr-1" src="@/assets/icons/english.svg" alt=""/>
            Inglês
        </button>

        <button 
          @click="$i18n.locale = locales[2]"
          class="height: 4.1rem
    background-color: #27272A
    border-radius: 0.8rem
    border: none
    padding: 1rem 1.9rem
    margin-left: 3rem
    display: flex
    justify-content: space-around
    align-items: center
    gap: 0.5rem
    border: 1px solid #9d4b00"
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
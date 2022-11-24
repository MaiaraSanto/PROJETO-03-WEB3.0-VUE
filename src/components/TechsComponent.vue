<template>
    <section class="w-full h-40 #121212 rounded-2xl width: 100vw height: calc(100vh - 13.4rem) display: flex align-items: center flex-direction: column width: 80.3rem height: 20.5rem background: #27272A border: 1px solid #9d4b00 border-radius: 8px display: flex justify-content: space-around align-items: center">
        <ul class="list-disc text-white-400 h-full flex flex-col justify-center items-center flex-wrap width: 65.1rem height: 100px color: #ffffff font-size: 1.9rem margin: 5rem padding: 0 auto text-align: center height: 60px display: flex flex-direction: column width: auto height: 100% align-items: flex-start height: 150px">
          <li 
            class="mb-1 w-[10rem] font-size: 1.5rem color: rgba(255, 255, 255, 0.87)"
            v-for="tech in techs" :key="tech"
          >
            {{tech}}
          </li>
        </ul>
      </section>
</template>

<script>
  export default {
    name: 'TechsComponent',
    data() {
      return {
        techs: [
            'HTML', 
            'SASS', 
            'JavaScript', 
            'TypeScript', 
            'React', 
            'Styled-Components', 
            'Java', 
            'Spring', 
            'VueJs', 
            'Tailwind', 
            'Bootstrap', 
            'Angular', 
            'MYSql',
            'PostgreSQL',
            'PL/SQL',
            'MariaDB',
            'Firebird',
            'SQLServer'
          ]
      }
    }
  }
</script>
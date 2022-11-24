<template>
    <section class="w-full h-40 #121212 rounded-2xl width: 100vw height: calc(100vh - 13.4rem) display: flex align-items: center flex-direction: column ">
        <ul class="list-disc text-white-400 h-full flex flex-col justify-center items-center flex-wrap width: 65.1rem height: 100px color: #ffffff font-size: 1.9rem margin: 5rem padding: 0 auto text-align: center
        ">
          <li 
            class="mb-1 w-[10rem]"
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
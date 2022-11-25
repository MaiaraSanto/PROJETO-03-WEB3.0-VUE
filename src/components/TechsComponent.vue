<template>
     <section class="w-full h-40 bg-dark-600 rounded-2xl">
        <ul class="list-disc text-white-400 h-full flex flex-col justify-center items-center flex-wrap ">
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
            'VueJs', 
            'Tailwind',  
            'Angular', 
            'MYSql',
            'PostgreSQL',
            'PL/SQL',
            'MariaDB',
            'Firebird',
          
          ]
      }
    }
  }
</script>
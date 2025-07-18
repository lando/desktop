<template>
  <div class="plugins">
    <h1>Plugins</h1>
    <el-row
      v-for="(row, index) in rows"
      :key="index"
    >
      <el-col
        v-for="plugin in row"
        :key="plugin.name"
        :span="12"
        class="plugin"
        @click="goToPlugin(plugin)"
      >
        <img :src="plugin.image">
        <h3>{{ plugin.name }}</h3>
        <div class="plugin-last-updated">
          Last Updated: {{ plugin.lastUpdated }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import {_} from 'lodash';
import router from '../router.js';

const plugins = ref([
  {
    // MVP plugin.yml
    name: 'PHP',
    image: 'https://www.php.net/images/logos/new-php-logo.svg',
    description: '##THIS IS MARKDOWN. PHP is a popular scripting language that is especially suited for web development. It is often served by either apache or nginx. You can easily add it to your Lando app by adding an entry to the services top-level config in your Landofile.',
    releaseNotesUrl: 'https://URL/to/CHANGELOG.yml',
    // MVP package.json
    installedVersion: '0.5.2',
    repositoryUrl: 'https://github.com/lando/php',
    teaser: 'Runs PHP for your web applications.',
    author: 'Lando Alliance.',
    contributors: [],
    // MVP Local User Data
    lastUpdated: '2022-01-23T18:25:43.511Z',
    // MVP Remote Sources (NPM)
    newestVersion: '0.5.2',
    // Future
    githubStars: 304, // Ability to start the project from dashboard? Auth-ed with GitHub?
    totalInstalls: 20303, // Get from NPM?
    sponsors: [],
    tags: ['Services', 'PHP'],
  },
  {
    // MVP plugin.yml
    name: 'PHP',
    image: 'https://www.php.net/images/logos/new-php-logo.svg',
    description: '##THIS IS MARKDOWN. PHP is a popular scripting language that is especially suited for web development. It is often served by either apache or nginx. You can easily add it to your Lando app by adding an entry to the services top-level config in your Landofile.',
    releaseNotesUrl: 'https://URL/to/CHANGELOG.yml',
    // MVP package.json
    installedVersion: '0.5.2',
    repositoryUrl: 'https://github.com/lando/php',
    teaser: 'Runs PHP for your web applications.',
    author: 'Lando Alliance.',
    contributors: [],
    // MVP Local User Data
    lastUpdated: '2022-01-23T18:25:43.511Z',
    // MVP Remote Sources (NPM)
    newestVersion: '0.5.2',
    // Future
    githubStars: 304, // Ability to start the project from dashboard? Auth-ed with GitHub?
    totalInstalls: 20303, // Get from NPM?
    sponsors: [],
    tags: ['Services', 'PHP'],
  },
  {
    // MVP plugin.yml
    name: 'PHP',
    image: 'https://www.php.net/images/logos/new-php-logo.svg',
    description: '##THIS IS MARKDOWN. PHP is a popular scripting language that is especially suited for web development. It is often served by either apache or nginx. You can easily add it to your Lando app by adding an entry to the services top-level config in your Landofile.',
    releaseNotesUrl: 'https://URL/to/CHANGELOG.yml',
    // MVP package.json
    installedVersion: '0.5.2',
    repositoryUrl: 'https://github.com/lando/php',
    teaser: 'Runs PHP for your web applications.',
    author: 'Lando Alliance.',
    contributors: [],
    // MVP Local User Data
    lastUpdated: '2022-01-23T18:25:43.511Z',
    // MVP Remote Sources (NPM)
    newestVersion: '0.5.2',
    // Future
    githubStars: 304, // Ability to start the project from dashboard? Auth-ed with GitHub?
    totalInstalls: 20303, // Get from NPM?
    sponsors: [],
    tags: ['Services', 'PHP'],
  },
]);

// Chunk plugins into rows.
const rows = computed(() => {
  return _.chunk(plugins.value, 2);
});

const goToPlugin = plugin => {
  const url = '/plugins/' + _.camelCase(plugin.name);
  router.push(url);
};

</script>

<style lang="scss" scoped>
  .plugin {
    font-size: 1rem;
    border: 1px solid var(--el-border-color);
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem 1rem 0 0;
    max-width: calc(50% - 2rem);
    cursor: pointer;
    img {
      width: 100px;
    }
    h3 {
      margin: 0rem;
      font-size: 1rem;
    }
    .plugin-last-updated {
      font-size: .8rem;
    }
  }
</style>

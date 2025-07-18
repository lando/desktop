<template>
  <div class="plugin">
    <el-row class="plugin-header">
      <el-col
        class="plugin-image-wrapper"
        :span="6"
      >
        <img
          :src="plugin.image"
          class="plugin-image"
        >
      </el-col>
      <el-col :span="18">
        <el-row class="plugin-summary">
          <h1>{{ plugin.name }}</h1>
          <el-tag class="plugin-installed-version">
            v{{ plugin.installedVersion }}
          </el-tag>
        </el-row>
        <el-row>
          <span class="plugin-author">by {{ plugin.author }}</span>
        </el-row>
        <el-row class="plugin-actions">
          <el-button @click="openInBrowser(plugin.releaseNotesUrl)">
            Release Notes
          </el-button>
          <el-button @click="openInBrowser(plugin.repositoryUrl)">
            <icon>
              <svg
                class="social-icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </icon>
            Code
          </el-button>
          <el-button type="danger">
            Uninstall
          </el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="plugin-description">
      {{ plugin.description }}
    </el-row>
    <el-row class="plugin-contributors">
      Maintained by {{ contributors }}
    </el-row>
    <el-row class="plugin-updated">
      Created {{ }}
      Last Updated {{ plugin.lastUpdated }}
    </el-row>
  </div>
</template>

<script setup>
import {_} from 'lodash';
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {openInBrowser} from '../composables/electron-actions';

const route = useRoute();


const plugin = computed(
    () => {
      return fetchPlugin(route.params.id);
    },
);

const fetchPlugin = id => {
  // Replace w/getter function.
  return {
    // MVP plugin.yml
    name: 'PHP',
    image: 'https://www.php.net/images/logos/new-php-logo.svg',
    description: '##THIS IS MARKDOWN. PHP is a popular scripting language that is especially suited for web development. It is often served by either apache or nginx. You can easily add it to your Lando app by adding an entry to the services top-level config in your Landofile.',
    releaseNotesUrl: 'https://URL/to/CHANGELOG.yml',
    // MVP package.json
    installedVersion: '0.5.2',
    repositoryUrl: 'https://github.com/lando/php',
    teaser: 'Runs PHP for your web applications.',
    author: 'Lando Alliance',
    contributors: ['pirog', 'labboy0276', 'reynoldsalec'],
    // MVP Local User Data
    lastUpdated: '2022-01-23T18:25:43.511Z',
    // MVP Remote Sources (NPM)
    newestVersion: '0.5.2',
    // Future
    githubStars: 304, // Ability to start the project from dashboard? Auth-ed with GitHub?
    totalInstalls: 20303, // Get from NPM?
    sponsors: [],
    tags: ['Services', 'PHP'],
  };
};

const contributors = computed(() => {
  return _.join(plugin.value.contributors, ', ');
});

</script>

<style lang="scss" scoped>

.plugin {
  margin: 1rem 2rem 0 0;
  .plugin-image-wrapper {
    justify-content: center;
    display: flex;
    align-content: center;
    .plugin-image {
      width: 100px;
    }
  }
  .plugin-header {
    margin-bottom: 2rem;
    .plugin-summary {
      align-items: center;
      gap: 2rem;
      h1 {
        margin: 0;
      }
    }
    .plugin-actions {
      .social-icon {
        fill: black;
        height: 1rem;
        margin-right: .5rem;
      }
    }
  }
  .plugin-description {
    line-height: 1.5rem;
  }
  .plugin-links {
    margin-top: 2rem;
  }
}

</style>

---
title: Creating Dynamic Schemas for SEO in Nuxt using Context and YAML
description: Let's learn about an advanced SEO concept called Schemas and how we can create them within our dynamic Nuxt pages.
tags: ["Nuxt", "SEO", "Vue"]
year: 2022
month: March
day: 7
---

Schemas are structured data within the head of a webpage that assist search engines with understanding the content being shared in a page. When used successfully, it can change the format that a search engine shares your website in search results. By enhancing the display of your site within search results, this may improve page views and click-through rates.

There are quite a few Schema types that can be used for websites related to:

- Organizations
- Frequently Asked Questions (FAQ)
- Events
- People
- Recipes
- Defined Terms

This is just some of the provided schemas and not an exhasustive list. For more information, check out the spaces at [Schema.org](https://schema.org/).

[Nuxt](https://nuxtjs.org/) is a popular framework to build server-side rendered or static sites using Vue. It also provides built-in functionality to optimize SEO in your web pages. Below, we're going to create a dynamic article page that is gathering data from a YAML file. We'll create a [FAQSchema](https://developers.google.com/search/docs/advanced/structured-data/faqpage) using content that we'll pull from a YAML file using the `@nuxt/content` module.

## Project Setup

### Create Nuxt App

Let's create our Nuxt project by using a package manager such as Yarn or NPM.

```bash
npm init nuxt-app schema-project

// or

yarn create nuxt-app schema-project
```

In the project config prompts under Nuxt.js modules, you can select `Content - Git-based headless CMS`.

### Add Content Module

If you miss selecting Content, you can install the `@nuxt/content` package.

```bash
npm install @nuxt/content

// or

yarn add @nuxt/content
```

To use this module throughout your Nuxt project, you can add it to your project's `nuxt.config.js` file under **modules**.

```javascript[nuxt.config.js]
  modules: [
    "@nuxt/content",
  ],
```

### Add our articles template and content file

Under pages, create a new folder called **articles** and within that, a template file called `_articles.vue`. While you're in there, add your `<template>` and `<script>` tags.

If you installed the @nuxt/content module, you should have a **content** folder in the root of your project. If not, you can make one now!

Within out **content** folder, create a subfolder called _articles_. Now we can create our YAML file that will store our page's content. My example project is going to be a site about dogs, so my yaml file is going to be called `all-about-the-labrador-retriever.yml`.

You can copy/paste this content in your yml file if you don't have your own content.

```yml[all-about-the-labrador-retriever.yml]
---
title: All About the Labrador Retriever
description: In this article, we'll be learning about the American and English Labrador Retrievers.
header:
  heading: All About the Labrador Retriever
  subtitle: Let's learn about Labs!
body_text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

### Fetch YAML content into our article page

Now we'll need to fetch our data from our YAML file using the Content module to populate our _articles page!

In `_articles.vue`, within your script tags, add this async function.

```javascript[_articles.vue]
<script>
    export default {
        async asyncData({ $content, params, error }) {
            try {
                const data = await $content(`articles/${params.articles}`).fetch()
                return { data }
            } catch (err) {
                error({ statusCode: 404})
            }
        }
    }
</script>
```

To get some content on our page so it's not so boring, you can copy this code within your template tags.

```javascript[_articles.vue]
<template>
  <main>
    <div>
        <h1>{{ data.header.heading }}</h1>
        <p> {{ data.header.subtitle }}</p>
    </div>
    <div>
        <p>{{ data.body_text }}</p>
    </div>
  </main>
</template>
```

### Add initial SEO data

Let's not forget some critical SEO data -- the page title and description! We can do that by grabbing our data that we returned from our asyncData function and return it into a `head()` function.

If you're not familiar with the head function you can read more about it [here](https://nuxtjs.org/docs/components-glossary/head/). Be sure to add it within the **export default** curly braces, but outside of the asyncData function.

```javascript[_articles.vue]
head() {
    const title = this.data.title;
    const description = this.data.description;

    return {
        title,
        description
    }
}
```

Our page should now be rendering the title and description that we added to our YAML file!

## Create the FAQPage Schema

### What does this magic snippet of code mean?

Before we go ahead and enter a bunch of code to get things to work, let's learn about what the heck we're actually working with here.

At the end of this, we should be outputting something that resembles this into our page:

```html[_articles.vue]
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Question text goes here",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Answer text goes here"
        }
      }
    ]
  }
</script>
```

Let's dissect it!

Our script tag is letting the document know that the code within it is a combination of JSON and Linked Data. Linked Data is a bit of extra spice we can use on top of JSON notation that provides additional categorial mappings in our data. Google and most major search engines support, and encourage, the use of this format.

Under **@context**, we are telling the search engine that the schema rules we're following is out of the Schema.org rule book; specifically using their 'FAQPage' **@type** of schema.

**mainEntity** is an array that holds the meat and potatoes of our schema. In this case, any and all question data can be put in here.

And that's it! By following this exact format, search engines will be able to tell what information you're trying to provide them and they'll take care of the rest to present it in the special fashion that they know how.

### Creating FAQ data to work with

Let's add some FAQ data to our YAML file to use within our page. Very soon we'll create a function to turn this text into the beautiful schema we looked at earlier.

Here's what my YAML file looks like now:

```yml[all-about-the-labrador-retriever.yml]
---
title: All About the Labrador Retriever
description: In this article, we'll be learning about the American and English Labrador Retrievers.
schema_faq:
  - question: What is the lifespan of a Labrador Retriever?
    answer: The average lifespan for a Labrador Retriever is between 10 - 13 years.
  - question: Do Labradors
header:
  heading: All About the Labrador Retriever
  subtitle: Let's learn about Labs!
body_text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

### Write a function that creates our FAQPage schema

Within our script tags, but outside of the `export default` curly braces, we can create a function that grabs the `schema_faq` snippet we added in our YAML file and converts it into the ld+json format that we need.

Our function will map over entries within `schema_faq`, and create individual objects out of them that consist of the Question and Answer text. This new array that we create from this map method will then be the mainEntity value.

```javascript[_articles.vue]
const createFAQSchema = (content) => {
  // For each of our question/answer pairs in our content, create a new object which will then be stored in an array called 'entities'.
  const entities = content.map((entity) => {
    return {
      "@type": "Question",
      name: `<p>${entity.question}</p>`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `<p>${entity.answer}</p>`,
      },
    };
  });

  return {
    // Returns our LD+JSON FAQPage schema using our entities array that we created above.
    "@context": "http://schema.org",
    "@type": "FAQPage",
    mainEntity: entities,
  };
};
```

### Pass our schema into our page's head tags

Now that we have our schema created, we've reached the final step of passing the data to our page's head!

Back in our `head()` function, we can create a variable called `script` that stores an empty array for now. This may be an extra step, but it's nice having this script variable in case you want to pass additional information that should be represented as script tags in the future.

We'll then push an object to our `script` array that contains three things:

1.`hid: 'schemaFaq'` - The hid property is needed by Vue-Meta to avoid duplication of meta information. The value can be whatever you want, but I'll stick with schemaFAQ which can be helpful to discern between if you are using multiple schema types.

2.`type: 'application/ld+json' - This tells our document what type of data is being used within this specific script tag.

3.`json: createFAQSchema(this.data.schema_faq)` - The json property will return any json value given to it. In our case we are calling our neat little function here, passing our YAML data's schema_faq snippet as an argument, which will return a JSON object.

Finally, in our head function's return object, you can return script!

```javascript[_articles.vue]
head() {
  const title = this.data.title;
  const description = this.data.description;
  let script = [];

  if (this.data.schema_faq) { // Wrapped in an If statement to avoid errors if a YAML file does NOT contain schema_faq data
    script.push({
      hid: 'schemaFaq',
      json: createFAQSchema(this.data.schema_faq),
      type: 'application/ld+json'
    })
  }

  return {
    title,
    description,
    script
  }
}
```

That's it! If you inspect your page in the browser, between the `<head>` tags, you'll now see our `<script data-n-head="ssr" data-hid="schemaFaq" type="application/ld+json">` tag with our crafted JSON object inside.

**Except..** our paragraph tags and a few other special characters look a little funky. That's not going to work too well!

### Solving our special character problem

This is an easy fix thanks to Vue Meta's `__dangerouslyDisableSanitizers` property. You can read more about it in [Vue Meta's documentation](https://vue-meta.nuxtjs.org/api/#dangerouslydisablesanitizers).

We will add this to our head() function's return object as a property and give it a value of `['script']`. This tells it to only disable sanitizers within script tags.

I'm not a security expert so do be sure to read the documentation on this property to read more about how this can lead to security vulnerabilities if you're not careful!

Our return statement should now look like this:

```javascript[_articles.vue]
return {
  title,
  description,
  script,
  __dangerouslyDisableSanitiziers: ["script"]
}
```

## Testing

You've seen how we can view our schema by inspecting our page your browser's developer tools (or by clicking View Source). That's a great way to make sure test data output in a local development environment.

How do you know if Google and other search engines deem this code as valid?

Google has created a [Rich Results Test](https://search.google.com/test/rich-results) tool that will test your page and let you know if it's able to validate the schema data on your page. You can provide it with a code snippet, or pass it a URL to crawl and test. Your page will need to be published in a production environment for that to work!

The best part of this tool is that you can preview how Google will format this data in search results.

## Conclusion

Hopefully this article has been helpful to you and you're on your way to adding this great advanced SEO feature to your webpages.

Thanks for reading!

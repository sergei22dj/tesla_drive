import { createClient } from "contentful";

const contentful = require("contentful-management");

const useContentful = () => {
  const client = createClient({
    space: "gmybk9ypky04",
    accessToken: "l9dqSy7ZjRG10_7eHp4qAWI1OdmOe3qwrKlvKkG1xkQ",
  });
  const getItemsAccessories = async (setLoading) => {
    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: "accessories",
        select: "fields",
      });
      const sanitazedEntries = entries.items.map((item) => {
        const image = item.fields.images.map((el) => {
          const imageData = el.fields.file.url;

          return imageData;
        });
        const id = item.sys.id;
        return {
          ...item.fields,
          image,
          id,
        };
      });
      setLoading(false);
      return sanitazedEntries;
    } catch (error) {
      console.log(`Error fetching Items accesuary: ${error}`);
    }
  };
  const getItemsSpares = async (setLoading) => {
    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: "sparesItems",
        select: "fields",
      });
      const sanitazedEntries = entries.items.map((item) => {
        const image = item.fields.images.map((el) => {
          const imageData = el.fields.file.url;
          return imageData;
        });
        const id = item.sys.id;
        return {
          ...item.fields,
          image,
          id,
        };
      });
      setLoading(false);
      return sanitazedEntries;
    } catch (error) {
      console.log(`Error fetching Items: ${error}`);
    }
  };
  const getItemsMerch = async (setLoading) => {
    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: "merchItems",
        select: "fields",
      });
      const sanitazedEntries = entries.items.map((item) => {
        const image = item.fields.images.map((el) => {
          const imageData = el.fields.file.url;
          return imageData;
        });
        const id = item.sys.id;
        return {
          ...item.fields,
          image,
          id,
        };
      });
      setLoading(false);
      return sanitazedEntries;
    } catch (error) {
      console.log(`Error fetching Items: ${error}`);
    }
  };
  const getItemsNews = async (setLoading) => {
    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: "NewsItems",
        select: "fields",
      });
      console.log("entries", entries);
      const sanitazedEntries = entries.items.map((item) => {
        const image = item.fields.img.fields.file.url;
        const image2 = item.fields.img2.fields.file.url;

        const id = item.sys.id;

        return {
          ...item.fields,
          image,
          image2,
          id,
        };
      });
      setLoading(false);
      return sanitazedEntries;
    } catch (error) {
      console.log(`Error fetching Items: ${error}`);
    }
  };
  const getItemsTopics = async (setLoading) => {
    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: "TopicItems",
        select: "fields",
      });
      console.log("entries", entries);
      const sanitazedEntries = entries.items.map((item) => {
        const image = item.fields.img.fields.file.url;
        const image2 = item.fields.img2.fields.file.url;
        const id = item.sys.id;

        return {
          ...item.fields,
          image,
          image2,
          id,
        };
      });
      setLoading(false);
      return sanitazedEntries;
    } catch (error) {
      console.log(`Error fetching Items: ${error}`);
    }
  };
  const getItemsComment = async (setLoading) => {
    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: "Comments",
        select: "fields",
      });
      console.log("entries-comments:   ", entries);
      const sanitazedEntries = entries.items.map((item) => {
        const image = item.fields.image.fields.file.url;

        const id = item.sys.id;

        return {
          ...item.fields,
          image,

          id,
        };
      });
      setLoading(false);
      return sanitazedEntries;
    } catch (error) {
      console.log(`Error fetching Items: ${error}`);
    }
  };

  const postClient = contentful.createClient({
    accessToken: "CFPAT-eWsRsur4FJy_IWNpQSOmltLyyOuGtQzpfjt67zYdkCo",
  });

  const createPost = async (data) => {
    postClient
      .getSpace("gmybk9ypky04")
      .then((space) => space.getEnvironment("master"))
      .then((environment) =>
        environment.createEntryWithId(
          "Comments",
          Math.floor(Math.random() * Date.now()).toString(16),
          {
            fields: {
              name: {
                "en-US": "Відгук",
              },
              author: {
                "en-US": data.name,
              },
              text: {
                "en-US": data.text,
              },
              number: {
                "en-US": data.number,
              },
            },
          }
        )
      )
      .then((entry) => console.log(entry))
      .catch(console.error);
  };

  const getItems = async (setLoading) => {
    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: "items",
        select: "fields",
      });
      console.log("auto-entries:  ", entries);
      const sanitazedEntries = entries.items.map((item) => {
        const image = item.fields.image.map((el) => {
          const imageData = el.fields.file.url;
          return imageData;
        });
        const id = item.sys.id;
        return {
          ...item.fields,
          image,
          id,
        };
      });
      console.log("auto-sanitazedEntries getItems:  ", sanitazedEntries);
      setLoading(false);
      return sanitazedEntries;
    } catch (error) {
      console.log(`Error fetching getItems: ${error}`);
    }
  };

  const getSeoText = async (setLoading) => {
    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: "seo",
        select: "fields",
      });
      const sanitazedEntries = entries.items.map((item) => {
        const id = item.sys.id;
        return {
          ...item.fields,

          id,
        };
      });
      setLoading(false);
      return sanitazedEntries;
    } catch (error) {
      console.log(`Error fetching Items: ${error}`);
    }
  };

  const getMetaTags = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "metatags",
        select: "fields",
      });
      console.log("auto-entries:  ", entries);
      const sanitazedEntries = entries.items.map((item) => {
        const id = item.sys.id;
        return {
          ...item.fields,

          id,
        };
      });
      console.log("auto-sanitazedEntries:  ", entries);

      return sanitazedEntries;
    } catch (error) {
      console.log(`Error fetching Items: ${error}`);
    }
  };
  return {
    getItems,
    getItemsMerch,
    getItemsAccessories,
    getItemsSpares,
    getItemsNews,
    getItemsTopics,
    getItemsComment,
    createPost,
    getMetaTags,
    getSeoText,
  };
};

export default useContentful;

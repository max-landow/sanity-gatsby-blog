export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "615109a76db04c455d02d456",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-sn996eaj",
                  apiId: "301e2d09-fd97-43eb-b3d0-285288640a16",
                },
                {
                  buildHookId: "615109a7a9a29a0d15e8893b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-shciyag9",
                  apiId: "29e5872a-6a3c-4fb0-a45f-ae5d6a1a1485",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/max-landow/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-shciyag9.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

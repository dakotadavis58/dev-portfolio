module.exports = {
  apps: [
    {
      name: "devfolio",
      exec_mode: "cluster",
      instances: "1",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      watch: false,
      ignore_watch: ["node_modules", ".next/cache/**"],
    },
  ],
};

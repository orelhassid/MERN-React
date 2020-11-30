import React from "react";
import CreatePostsForm from "../components/Forms/CreatePostsForm";
import Posts from "../components/Posts/Posts";
import { Layout } from "../components/layout";
import { Button, Typography } from "@material-ui/core";

export default function HomePage() {
  window.addEventListener("beforeinstallprompt", (event) => {
    console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container
    // divInstall.classList.toggle("hidden", false);
  });

  const handleClick = () => {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    promptEvent.userChoice.then((result) => {
      console.log("👍", "userChoice", result);
      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      window.deferredPrompt = null;
      // Hide the install button.
      // divInstall.classList.toggle("hidden", true);
    });
  };

  return (
    <Layout>
      <Button onClick={handleClick}>PWA INSTALL</Button>
      <Typography>PWA Changed!</Typography>
      <CreatePostsForm />
      <Posts />
    </Layout>
  );
}

import type { ProfileContent } from "../types/profile";

export const defaultProfile: ProfileContent = {
  profile: {
    imageUrl: null,

    metadata: {
        title: "Asuhaze",
        description: "Personal portfolio website",
    },
  },

  socialLinks: [
    { id: "link-1", label: "Link 1", url: "" },
    { id: "link-2", label: "Link 2", url: "" },
    { id: "link-3", label: "Link 3", url: "" },
  ],

  cards: [
    { id: "card-1", content: "Text 1" },
    { id: "card-2", content: "Text 2" },
  ],

  navigation: [
    { id: "nav-1", label: "Button 1", enabled: false, url: null },
    { id: "nav-2", label: "Button 2", enabled: false, url: null },
    { id: "nav-3", label: "Button 3", enabled: false, url: null },
  ],

  theme: {
    backgroundColor: "#000000",
    containerColor: "#ff3131",
    borderColor: "#ad1b45",
    cardColor: "#c61f1f",
    textColor: "#ffffff",
  },
};

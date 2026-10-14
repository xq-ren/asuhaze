"use client"
import { useState } from 'react';
import { useEffect } from "react";
import { defaultProfile } from "../../data/defaultProfile";
import ProfileView from "../../components/profileView";

export default function EditorPage() {
    const [profile, setProfile] = useState(defaultProfile);

    function handleSave() {
        localStorage.setItem("asuhaze-profile", JSON.stringify(profile));
    }

    function handleReset() {
        setProfile(structuredClone(defaultProfile));
    }

    useEffect(() => {
        const savedProfile = localStorage.getItem("asuhaze-profile");
        if (savedProfile) {
            try {
                setProfile(JSON.parse(savedProfile));
            } catch {
                console.error("Could not load saved profile.");
            }
        }
    }, []);

    return (
        <main>
            <label htmlFor="containerColor">Container color: </label>
            <input id="containerColor" type="color" value={profile.theme.containerColor}
            onChange={(event) => {
                setProfile({
                    ...profile,
                    theme: {
                        ...profile.theme,
                        containerColor: event.target.value,
                    },
                });
            }} />
            <p>Selected color: {profile.theme.containerColor}</p>

            <label htmlFor="borderColor">Border color: </label>
            <input id="borderColor" type="color" value={profile.theme.borderColor}
            onChange={(event) => {
                setProfile({
                    ...profile,
                    theme: {
                        ...profile.theme,
                        borderColor: event.target.value,
                    },
                });
            }} />
            <p>Selected color: {profile.theme.borderColor}</p>

            <label htmlFor="layoutShadowColor">Layout Shadow color: </label>
            <input id="layoutShadowColor" type="color" value={profile.theme.layoutShadowColor}
            onChange={(event) => {
                setProfile({
                    ...profile,
                    theme: {
                        ...profile.theme,
                        layoutShadowColor: event.target.value,
                    },
                });
            }} />
            <p>Selected color: {profile.theme.layoutShadowColor}</p>

            <label htmlFor="buttonColor">Button color: </label>
            <input id="buttonColor" type="color" value={profile.theme.buttonColor}
            onChange={(event) => {
                setProfile({
                    ...profile,
                    theme: {
                        ...profile.theme,
                        buttonColor: event.target.value,
                    },
                });
            }} />
            <p>Selected color: {profile.theme.buttonColor}</p>

            <label htmlFor="cardColor">Card color: </label>
            <input id="cardColor" type="color" value={profile.theme.cardColor}
            onChange={(event) => {
                setProfile({
                    ...profile,
                    theme: {
                        ...profile.theme,
                        cardColor: event.target.value,
                    },
                });
            }} />
            <p>Selected color: {profile.theme.cardColor}</p>

            <label htmlFor="cardShadowColor">Card Shadow color: </label>
            <input id="cardShadowColor" type="color" value={profile.theme.cardShadowColor}
            onChange={(event) => {
                setProfile({
                    ...profile,
                    theme: {
                        ...profile.theme,
                        cardShadowColor: event.target.value,
                    },
                });
            }} />
            <p>Selected color: {profile.theme.cardShadowColor}</p>

            <label htmlFor="textOutlineColor">Text Outline color: </label>
            <input id="textOutlineColor" type="color" value={profile.theme.textOutlineColor}
            onChange={(event) => {
                setProfile({
                    ...profile,
                    theme: {
                        ...profile.theme,
                        textOutlineColor: event.target.value,
                    },
                });
            }} />
            <p>Selected color: {profile.theme.textOutlineColor}</p>

            <ProfileView profile={profile} />

            <button type="button" onClick={handleSave}>
                Save changes
            </button>

            <button type="button" onClick={handleReset}>
                Reset to Default
            </button>
       </main>
  );
}
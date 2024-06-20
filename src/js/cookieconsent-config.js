import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        }
    },
    language: {
        default: "en",
        autoDetect: "document",
        translations: {
            en: {
                consentModal: {
                    title: "Cookies",
                    description: "We use cookies to ensure you get the best experience on our website.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/en/villkor-fragor\">Privacy Policy</a>\n<a href=\"/en/villkor-fragor\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Below you'll find a summary of how we use cookies on our website..",
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "On our website hagadalensvandrarhem.se we collect information from you when you book one of our rooms via the reservation form. The information we gather includes your name, your physical address, your email address as well as any other data that you optionally choose to submit as part of the form.  When a reservation is done we use the reservation system Sirvoy to gather information.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to our policy on cookies and your choices, please contact us via the contact information at the bottom of this website."
                        }
                    ]
                }
            },
            sv: {
                consentModal: {
                    title: "Cookies",
                    description: "Vi använder oss av cookies på hemsidan för att förbättra upplevelsen.",
                    acceptAllBtn: "Acceptera alla",
                    acceptNecessaryBtn: "Avböj alla",
                    showPreferencesBtn: "Hantera inställningar",
                    footer: "<a href=\"/sv/villkor-fragor\">Integritetspolicy</a>\n<a href=\"/sv/villkor-fragor\">Villkor och frågor</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Acceptera alla",
                    acceptNecessaryBtn: "Avböj alla",
                    savePreferencesBtn: "Spara inställningar",
                    closeIconLabel: "Stäng dialog",
                    serviceCounterLabel: "Tjänst|Tjänster",
                    sections: [
                        {
                            title: "Cookie-användning",
                            description: "Under dessa sektioner finns en sammanfattning av hur vi använder cookies på hemsidan."
                        },
                        {
                            title: "Strikt användning av obligatoriska cookies <span class=\"pm__badge\">Alltid aktiverad</span>",
                            description: "På vår webbplats hagadalensvandrarhem.se/ samlar vi in information från dig när du bokar ett rum hos oss via kontaktformulär. Den insamlade informationen inkluderar ditt namn, dina adressuppgifter, din e-postadress samt övriga uppgifter som du frivilligt väljer att uppge i formulärets meddelanderuta. I samband med bokningar använder vi bokningssystemet Sirvoy för att samla in informationen.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Mer information",
                            description: "Om du har några frågor om vår policy när det gäller cookies och dina val, se kontaktinformationen längst ner på hemsidan."
                        }
                    ]
                }
            }
        }
    }
});
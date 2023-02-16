import { GraphQLClient } from "graphql-request"

const endpoint = `${import.meta.env.VITE_CLIENT_APICD_URL}/${import.meta.env.VITE_NIMVIO_PROJECT_ID}`;
export const client = new GraphQLClient(endpoint, { headers: {} });

const globalCache = {}

export const getContentById = async (_client, id, option = {}) => {
  try {
    const query = /* GraphQL */ `
      query getContentById {
        content(contentId: "${id}") {
          Name
          ContentID
          Data
          TemplateName
          PublishedAt
        }
      }
    `;
    const response = await _client.request(query);
    if (!response) return { data: response }
    if (option && option.deep && response[0] && response[0].Data) {
      const referenceCache = option.cache || globalCache;
      referenceCache[id] = response[0]
      const responseData = response[0].Data;
      const responseDataKey = Object.keys(responseData);
      // Recursively fetch Reference Content
      for (const key of responseDataKey) {
        if (
          typeof responseData[key] === "object" &&
          responseData[key].Type === "Reference" &&
          responseData[key].ReferenceType === "Content" &&
          Array.isArray(responseData[key].ContentIDs)
        ) {
          responseData[key] = await Promise.all(
            responseData[key].ContentIDs.map(async (contentId) => {
              if (referenceCache[contentId]) {
                return referenceCache[contentId];
              } else {
                const { data } = await getContentById(_client, contentId, {
                  deep: true,
                  cache: referenceCache,
                });
                referenceCache[contentId] = data
                return data;
              }
            })
          );
        }
      }
    }
    return { data: response[0] };
  } catch (error) {
    console.log("error fetching id ", id, error);
    console.log("error :", error);
  }
}

export const data = {
  "TemplateName": "Homepage",
  "Data": {
      "description": "A Landing Page Example created with Nimvio",
      "title": "Nimvio Landing Page Example",
      "image": {
          "Type": "Reference",
          "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Hero_published.webp",
          "Id": "Media_79dc72dd-f138-43a1-a828-3d5fd4d79b59",
          "AltText": "",
          "ReferenceType": "Media"
      },
      "content": [
          {
              "TemplateName": "Homepage Hero",
              "Data": {
                  "heading": "Nimvio Landing Page Example",
                  "subhead": "",
                  "text": "Clone, deploy, edit, and customize this starter to build your own homepage",
                  "kicker": "Nimvio",
                  "links": [
                      {
                          "TemplateName": "Homepage Link",
                          "Data": {
                              "text": "Deploy Now",
                              "href": "/"
                          },
                          "Name": "Link - Deploy Now",
                          "PublishedAt": "2023-02-15T16:36:20.121Z",
                          "ContentID": "Content_603af875-2f80-438d-88b5-622b00f5da4b"
                      },
                      {
                          "TemplateName": "Homepage Link",
                          "Data": {
                              "text": "Github",
                              "href": "/"
                          },
                          "Name": "Link - Github",
                          "PublishedAt": "2023-02-15T16:36:20.222Z",
                          "ContentID": "Content_3245cbb6-c833-4110-a8b8-2ebecf89ce0e"
                      }
                  ],
                  "image": {
                      "Type": "Reference",
                      "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Hero_published.webp",
                      "Id": "Media_79dc72dd-f138-43a1-a828-3d5fd4d79b59",
                      "AltText": "",
                      "ReferenceType": "Media"
                  }
              },
              "Name": "Hero",
              "PublishedAt": "2023-02-15T16:36:20.302Z",
              "ContentID": "Content_7fb44d02-457b-491c-90f1-93ba946e766d"
          },
          {
              "TemplateName": "Homepage Logo List",
              "Data": {
                  "name": "Logo List",
                  "text": "Join other industry-leading organizations pushing boundaries with Nimvio",
                  "logos": [
                      {
                          "TemplateName": "Homepage Logo",
                          "Data": {
                              "alt": "Foobank",
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Property_1_Foobank_published.webp",
                                  "Id": "Media_3cba99ed-3854-43e0-b13b-6884f9fc01f0",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Logo - Foobank",
                          "PublishedAt": "2023-02-15T16:36:20.442Z",
                          "ContentID": "Content_fb271f0f-14b3-4531-a196-489d9581ca3a"
                      },
                      {
                          "TemplateName": "Homepage Logo",
                          "Data": {
                              "alt": "Foobank",
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Property_1_Chattr_published.webp",
                                  "Id": "Media_69da12d9-6c67-4847-95ed-b988e559c232",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Logo - Chattr",
                          "PublishedAt": "2023-02-15T16:36:20.440Z",
                          "ContentID": "Content_f44606e4-e2c0-44a0-95ac-e06cd1e5f14e"
                      },
                      {
                          "TemplateName": "Homepage Logo",
                          "Data": {
                              "alt": "Circuitz",
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Property_1_Circuitz_published.webp",
                                  "Id": "Media_5dd85337-3e98-410a-b431-0bd45de7925d",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Logo - Circuitz",
                          "PublishedAt": "2023-02-15T16:36:20.502Z",
                          "ContentID": "Content_9e5f6e79-6985-4016-acb3-cb2c63fa25bb"
                      },
                      {
                          "TemplateName": "Homepage Logo",
                          "Data": {
                              "alt": "Funtendo",
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Property_1_Funtendo_published.webp",
                                  "Id": "Media_9fafd57c-9d19-4a8b-a12b-4b9254276b30",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Logo - Funtendo",
                          "PublishedAt": "2023-02-15T16:36:20.622Z",
                          "ContentID": "Content_c6631a3d-fe7d-4797-9145-c65cfcd3ffd0"
                      },
                      {
                          "TemplateName": "Homepage Logo",
                          "Data": {
                              "alt": "Deezii",
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Property_1_Deezii_published.webp",
                                  "Id": "Media_44d76a03-4a9e-4afe-93f4-eda4a13ab668",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Logo - Deezii",
                          "PublishedAt": "2023-02-15T16:36:21.561Z",
                          "ContentID": "Content_dfdd4beb-1765-441b-b7ea-1d354aa0fd4c"
                      }
                  ]
              },
              "Name": "Logo List",
              "PublishedAt": "2023-02-15T16:36:20.219Z",
              "ContentID": "Content_f099cd2e-6493-4cd6-aa73-b4a480ce19f8"
          },
          {
              "TemplateName": "Homepage Product List",
              "Data": {
                  "heading": "The all-in-one solution",
                  "text": "",
                  "kicker": "Product List",
                  "content": [
                      {
                          "TemplateName": "Homepage Product",
                          "Data": {
                              "heading": "SuperApp",
                              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              "links": [
                                  {
                                      "TemplateName": "Homepage Link",
                                      "Data": {
                                          "text": "Learn more",
                                          "href": "#"
                                      },
                                      "Name": "Link - Learn More",
                                      "PublishedAt": "2023-02-15T16:36:21.761Z",
                                      "ContentID": "Content_a7550917-3fec-4f3d-af4d-2f5f6cb4cb07"
                                  }
                              ],
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/storm-icon_published.webp",
                                  "Id": "Media_e721ad29-2d9a-46b9-b42e-ab5c72dba33d",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Product - SuperApp",
                          "PublishedAt": "2023-02-15T16:36:21.620Z",
                          "ContentID": "Content_fcf0717e-d2b8-4b04-a0d3-63a9deddfc1d"
                      },
                      {
                          "TemplateName": "Homepage Product",
                          "Data": {
                              "heading": "AcmeTracc",
                              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              "links": [
                                  {
                                      "TemplateName": "Homepage Link",
                                      "Data": {
                                          "text": "Learn more",
                                          "href": "#"
                                      },
                                      "Name": "Link - Learn More",
                                      "PublishedAt": "2023-02-15T16:36:21.761Z",
                                      "ContentID": "Content_a7550917-3fec-4f3d-af4d-2f5f6cb4cb07"
                                  }
                              ],
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/pulse-icon_published.webp",
                                  "Id": "Media_ec29ad6a-c6b7-434f-8d12-51a70abe7570",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Product - AcmeTracc",
                          "PublishedAt": "2023-02-15T16:36:21.301Z",
                          "ContentID": "Content_0abe9338-2bd2-4a59-a2be-6f865a906f02"
                      },
                      {
                          "TemplateName": "Homepage Product",
                          "Data": {
                              "heading": "HiperMarket",
                              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              "links": [
                                  {
                                      "TemplateName": "Homepage Link",
                                      "Data": {
                                          "text": "Learn more",
                                          "href": "#"
                                      },
                                      "Name": "Link - Learn More",
                                      "PublishedAt": "2023-02-15T16:36:21.761Z",
                                      "ContentID": "Content_a7550917-3fec-4f3d-af4d-2f5f6cb4cb07"
                                  }
                              ],
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/umbrella-icon_published.webp",
                                  "Id": "Media_84545c32-51c4-4297-b4e4-69e8a7fb7265",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Product - HiperMarket",
                          "PublishedAt": "2023-02-15T16:36:21.759Z",
                          "ContentID": "Content_19550070-95da-4737-aa6f-f28f3b95f280"
                      }
                  ]
              },
              "Name": "Product List",
              "PublishedAt": "2023-02-15T16:36:20.161Z",
              "ContentID": "Content_b1f480ab-1a83-400f-a9c9-695b2fbd82b5"
          },
          {
              "TemplateName": "Homepage Feature List",
              "Data": {
                  "heading": "Batteries included",
                  "text": "Lorem ipsum dolor sit amet",
                  "kicker": "Feature List",
                  "content": [
                      {
                          "TemplateName": "Homepage Feature",
                          "Data": {
                              "heading": "Modular",
                              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                              "kicker": "Feature",
                              "links": [
                                  {
                                      "TemplateName": "Homepage Link",
                                      "Data": {
                                          "text": "Learn more",
                                          "href": "#"
                                      },
                                      "Name": "Link - Learn More",
                                      "PublishedAt": "2023-02-15T16:36:21.761Z",
                                      "ContentID": "Content_a7550917-3fec-4f3d-af4d-2f5f6cb4cb07"
                                  }
                              ],
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Developer-Laptop_published.webp",
                                  "Id": "Media_61a5ae05-507a-4762-a2da-c4cb1559b502",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Feature - Modular",
                          "PublishedAt": "2023-02-15T16:36:21.442Z",
                          "ContentID": "Content_b789ddd1-1e7e-4232-8525-b59240ec9b24"
                      },
                      {
                          "TemplateName": "Homepage Feature",
                          "Data": {
                              "heading": "Modular",
                              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                              "kicker": "Feature",
                              "links": [
                                  {
                                      "TemplateName": "Homepage Link",
                                      "Data": {
                                          "text": "Learn more",
                                          "href": "#"
                                      },
                                      "Name": "Link - Learn More",
                                      "PublishedAt": "2023-02-15T16:36:21.761Z",
                                      "ContentID": "Content_a7550917-3fec-4f3d-af4d-2f5f6cb4cb07"
                                  }
                              ],
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Developer-Laptop_published.webp",
                                  "Id": "Media_61a5ae05-507a-4762-a2da-c4cb1559b502",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Feature - Extensible",
                          "PublishedAt": "2023-02-15T16:36:21.439Z",
                          "ContentID": "Content_c92d3526-9139-414d-b2a8-3abf64d330c2"
                      }
                  ]
              },
              "Name": "Feature List",
              "PublishedAt": "2023-02-15T16:36:20.299Z",
              "ContentID": "Content_74fd7a4b-c9e6-4272-9b7d-63af84453dd5"
          },
          {
              "TemplateName": "Homepage Benefit List",
              "Data": {
                  "heading": "Get started in minutes and make it your own",
                  "name": "Benefits",
                  "text": "Everything you need to start creating a homepage today",
                  "content": [
                      {
                          "TemplateName": "Homepage Benefit",
                          "Data": {
                              "heading": "Never pay for a homepage again",
                              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Property_1_activity_published.webp",
                                  "Id": "Media_f024ec7b-745a-4727-b6e0-891e17534934",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Benefit - First",
                          "PublishedAt": "2023-02-15T16:36:20.702Z",
                          "ContentID": "Content_5ab4b687-1e4f-46db-b4c7-371b9f010f7c"
                      },
                      {
                          "TemplateName": "Homepage Benefit",
                          "Data": {
                              "heading": "Never pay for a homepage again",
                              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Property_1_activity_published.webp",
                                  "Id": "Media_f024ec7b-745a-4727-b6e0-891e17534934",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Benefit - Second",
                          "PublishedAt": "2023-02-15T16:36:21.121Z",
                          "ContentID": "Content_860470d8-f70e-4b6e-bc28-4552eea9cb97"
                      },
                      {
                          "TemplateName": "Homepage Benefit",
                          "Data": {
                              "heading": "Never pay for a homepage again",
                              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Property_1_activity_published.webp",
                                  "Id": "Media_f024ec7b-745a-4727-b6e0-891e17534934",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Benefit - Third",
                          "PublishedAt": "2023-02-15T16:36:21.499Z",
                          "ContentID": "Content_e7c74ed6-cec6-4001-864e-641e04cd4a21"
                      },
                      {
                          "TemplateName": "Homepage Benefit",
                          "Data": {
                              "heading": "Never pay for a homepage again",
                              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Property_1_activity_published.webp",
                                  "Id": "Media_f024ec7b-745a-4727-b6e0-891e17534934",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Benefit - Fourth",
                          "PublishedAt": "2023-02-15T16:36:21.501Z",
                          "ContentID": "Content_696b66f9-0f86-4067-b11a-341a78e48978"
                      },
                      {
                          "TemplateName": "Homepage Benefit",
                          "Data": {
                              "heading": "Never pay for a homepage again",
                              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Property_1_activity_published.webp",
                                  "Id": "Media_f024ec7b-745a-4727-b6e0-891e17534934",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Benefit - Fifth",
                          "PublishedAt": "2023-02-15T16:36:21.240Z",
                          "ContentID": "Content_09687324-26b8-43f6-9199-4330d3471963"
                      },
                      {
                          "TemplateName": "Homepage Benefit",
                          "Data": {
                              "heading": "Never pay for a homepage again",
                              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              "image": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Property_1_activity_published.webp",
                                  "Id": "Media_f024ec7b-745a-4727-b6e0-891e17534934",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Benefit - Sixth",
                          "PublishedAt": "2023-02-15T16:36:20.822Z",
                          "ContentID": "Content_e36ea912-e333-4d3a-a112-17a05fb257e9"
                      }
                  ]
              },
              "Name": "Benefit List",
              "PublishedAt": "2023-02-15T16:36:20.499Z",
              "ContentID": "Content_39542602-329d-4674-a779-f5a892214565"
          },
          {
              "TemplateName": "Homepage Stat List",
              "Data": {
                  "heading": "Finish your feature sprints blazingly fast",
                  "name": "Stats",
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "kicker": "Stat List",
                  "icon": {
                      "Type": "Reference",
                      "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/storm-icon_published.webp",
                      "Id": "Media_e721ad29-2d9a-46b9-b42e-ab5c72dba33d",
                      "AltText": "",
                      "ReferenceType": "Media"
                  },
                  "links": [
                      {
                          "TemplateName": "Homepage Link",
                          "Data": {
                              "text": "Learn more",
                              "href": "#"
                          },
                          "Name": "Link - Learn More",
                          "PublishedAt": "2023-02-15T16:36:21.761Z",
                          "ContentID": "Content_a7550917-3fec-4f3d-af4d-2f5f6cb4cb07"
                      }
                  ],
                  "image": {
                      "Type": "Reference",
                      "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Runner-crap_published.webp",
                      "Id": "Media_d2d9c58a-b5ae-460c-9732-5f4fe4995bbc",
                      "AltText": "",
                      "ReferenceType": "Media"
                  },
                  "content": [
                      {
                          "TemplateName": "Homepage Stat",
                          "Data": {
                              "heading": "",
                              "label": "Satisfaction",
                              "value": "100%"
                          },
                          "Name": "Stat - Satisfaction",
                          "PublishedAt": "2023-02-15T16:36:21.002Z",
                          "ContentID": "Content_ac21ae47-b624-44d7-bee2-3b223d6f8f0b"
                      },
                      {
                          "TemplateName": "Homepage Stat",
                          "Data": {
                              "heading": "",
                              "label": "Users",
                              "value": "10k"
                          },
                          "Name": "Stat - Users",
                          "PublishedAt": "2023-02-15T16:36:21.780Z",
                          "ContentID": "Content_504507e3-400a-458b-9c70-4021355a7d4d"
                      },
                      {
                          "TemplateName": "Homepage Stat",
                          "Data": {
                              "heading": "",
                              "label": "TB",
                              "value": "256"
                          },
                          "Name": "Stat - TB",
                          "PublishedAt": "2023-02-15T16:36:20.961Z",
                          "ContentID": "Content_535f676c-d128-4f55-a1d1-cdf85fe19c1d"
                      }
                  ]
              },
              "Name": "Stat List",
              "PublishedAt": "2023-02-15T16:36:20.002Z",
              "ContentID": "Content_b74983ab-dc7d-4424-b432-4a5a6dcdaca4"
          },
          {
              "TemplateName": "Homepage Testimonial List",
              "Data": {
                  "heading": "Used by the world's most innovative teams",
                  "name": "Testimonials",
                  "kicker": "Testimonial List",
                  "content": [
                      {
                          "TemplateName": "Homepage Testimonial",
                          "Data": {
                              "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                              "source": "Jane Doe",
                              "avatar": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Avatar_published.webp",
                                  "Id": "Media_0d1dbc9c-edca-4e1e-96df-7bbab8ed8658",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Testimonial",
                          "PublishedAt": "2023-02-15T16:36:21.000Z",
                          "ContentID": "Content_59141154-f6ef-4baa-9e6d-937e5bf6fa47"
                      },
                      {
                          "TemplateName": "Homepage Testimonial",
                          "Data": {
                              "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                              "source": "Jane Doe",
                              "avatar": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Avatar_published.webp",
                                  "Id": "Media_0d1dbc9c-edca-4e1e-96df-7bbab8ed8658",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Testimonial 2",
                          "PublishedAt": "2023-02-15T16:36:20.881Z",
                          "ContentID": "Content_5b96a1b1-ccb4-4983-9ab8-0bbab6c2cb86"
                      },
                      {
                          "TemplateName": "Homepage Testimonial",
                          "Data": {
                              "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                              "source": "Jane Doe",
                              "avatar": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Avatar_published.webp",
                                  "Id": "Media_0d1dbc9c-edca-4e1e-96df-7bbab8ed8658",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Testimonial 3",
                          "PublishedAt": "2023-02-15T16:36:21.180Z",
                          "ContentID": "Content_92ca1e10-1755-48ff-b915-7692b7ba4f71"
                      },
                      {
                          "TemplateName": "Homepage Testimonial",
                          "Data": {
                              "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                              "source": "Jane Doe",
                              "avatar": {
                                  "Type": "Reference",
                                  "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Avatar_published.webp",
                                  "Id": "Media_0d1dbc9c-edca-4e1e-96df-7bbab8ed8658",
                                  "AltText": "",
                                  "ReferenceType": "Media"
                              }
                          },
                          "Name": "Testimonial 4",
                          "PublishedAt": "2023-02-15T16:36:21.122Z",
                          "ContentID": "Content_fb3bea92-9463-4915-9ab0-998fe2528f8a"
                      }
                  ]
              },
              "Name": "Testimonial List",
              "PublishedAt": "2023-02-15T16:36:20.561Z",
              "ContentID": "Content_6f5b28d0-ec1b-4bfb-93e1-210ff06b9b9d"
          },
          {
              "TemplateName": "Homepage CTA",
              "Data": {
                  "heading": "Dive in now",
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "kicker": "",
                  "links": [
                      {
                          "TemplateName": "Homepage Link",
                          "Data": {
                              "text": "Deploy Now",
                              "href": "/"
                          },
                          "Name": "Link - Deploy Now",
                          "PublishedAt": "2023-02-15T16:36:20.121Z",
                          "ContentID": "Content_603af875-2f80-438d-88b5-622b00f5da4b"
                      },
                      {
                          "TemplateName": "Homepage Link",
                          "Data": {
                              "text": "Github",
                              "href": "/"
                          },
                          "Name": "Link - Github",
                          "PublishedAt": "2023-02-15T16:36:20.222Z",
                          "ContentID": "Content_3245cbb6-c833-4110-a8b8-2ebecf89ce0e"
                      }
                  ],
                  "image": {
                      "Type": "Reference",
                      "MediaUrl": "https://media-dev.nimvio.com/Project_294e52e2-96d0-4401-8a0f-6f5c6a3582d5/Media/Floating-half-worse-than-before_published.webp",
                      "Id": "Media_66648965-a25d-44e9-9fb7-5468553bce5d",
                      "AltText": "",
                      "ReferenceType": "Media"
                  }
              },
              "Name": "CTA",
              "PublishedAt": "2023-02-15T16:36:20.619Z",
              "ContentID": "Content_28ed57dd-453d-4cc1-b315-97dffa7fc4ed"
          }
      ]
  },
  "Name": "Homepage",
  "PublishedAt": "2023-02-15T16:36:19.924Z",
  "ContentID": "Content_81b8facc-0e81-45fe-a9a9-2c2be581dbd9"
}

export const headerData = {
  "TemplateName": "LayoutHeader",
  "Data": {
      "name": "Header",
      "cta": [
          {
              "TemplateName": "Homepage Link",
              "Data": {
                  "text": "Learn more",
                  "href": "#"
              },
              "Name": "Link - Learn More",
              "PublishedAt": "2023-02-15T16:36:21.761Z",
              "ContentID": "Content_a7550917-3fec-4f3d-af4d-2f5f6cb4cb07"
          }
      ],
      "navItems": [
          {
              "TemplateName": "Nav Item",
              "Data": {
                  "description": "",
                  "text": "Pricing",
                  "href": "#",
                  "icon": {
                      "Type": "Reference",
                      "ReferenceType": "Media",
                      "Id": null,
                      "AltText": null,
                      "MediaUrl": null
                  }
              },
              "Name": "Nav Item - Pricing",
              "PublishedAt": "2023-02-15T16:36:22.086Z",
              "ContentID": "Content_061147a8-6aeb-46bf-b3b1-8b639b20377a"
          },
          {
              "TemplateName": "Nav Item",
              "Data": {
                  "description": "",
                  "text": "About",
                  "href": "#",
                  "icon": {
                      "Type": "Reference",
                      "ReferenceType": "Media",
                      "Id": null,
                      "AltText": null,
                      "MediaUrl": null
                  }
              },
              "Name": "Nav Item - Blog",
              "PublishedAt": "2023-02-15T16:36:22.087Z",
              "ContentID": "Content_32e8e4ee-e694-48b9-84aa-394a540f52b7"
          },
          {
              "TemplateName": "Nav Item",
              "Data": {
                  "description": "",
                  "text": "About",
                  "href": "#",
                  "icon": {
                      "Type": "Reference",
                      "ReferenceType": "Media",
                      "Id": null,
                      "AltText": null,
                      "MediaUrl": null
                  }
              },
              "Name": "Nav Item - About",
              "PublishedAt": "2023-02-15T16:36:22.087Z",
              "ContentID": "Content_bf12b810-42e6-4f0c-ac7d-c6c49d1c4d45"
          }
      ]
  },
  "Name": "Header",
  "PublishedAt": "2023-02-15T16:36:22.057Z",
  "ContentID": "Content_a3231b18-5a13-47ce-b363-888fa8323cfa"
}

export const footerData = {
  "TemplateName": "LayoutFooter",
  "Data": {
      "copyright": "© 2023 Nimvio, Inc. All rights reserved.",
      "name": "Footer",
      "socialLinks": [
          {
              "TemplateName": "SocialLink",
              "Data": {
                  "service": "twitter",
                  "username": "nimvio"
              },
              "Name": "Social - Twitter",
              "PublishedAt": "2023-02-15T16:36:22.089Z",
              "ContentID": "Content_5b9e92d0-e9ac-473c-871f-02bf94fcebfa"
          }
      ],
      "links": [
          {
              "TemplateName": "Homepage Link",
              "Data": {
                  "text": "Pricing",
                  "href": "#"
              },
              "Name": "Link - Pricing",
              "PublishedAt": "2023-02-15T16:36:22.146Z",
              "ContentID": "Content_f4d43c2a-9250-4d14-94f0-22565324078c"
          },
          {
              "TemplateName": "Homepage Link",
              "Data": {
                  "text": "About",
                  "href": "#"
              },
              "Name": "Link - About",
              "PublishedAt": "2023-02-15T16:36:22.167Z",
              "ContentID": "Content_2dbbddca-55a8-40f5-a689-c3534ef31cf6"
          },
          {
              "TemplateName": "Homepage Link",
              "Data": {
                  "text": "About",
                  "href": "#"
              },
              "Name": "Link - Blog",
              "PublishedAt": "2023-02-15T16:36:22.088Z",
              "ContentID": "Content_88ceddbd-b7fb-4497-8777-b131567b11a9"
          }
      ],
      "meta": [
          {
              "TemplateName": "Homepage Link",
              "Data": {
                  "text": "Terms",
                  "href": "/terms"
              },
              "Name": "Meta - Terms",
              "PublishedAt": "2023-02-15T16:36:22.169Z",
              "ContentID": "Content_e5d110bc-d951-4f1a-b917-2269d54d5d1b"
          },
          {
              "TemplateName": "Homepage Link",
              "Data": {
                  "text": "Privacy Policy",
                  "href": "/privacy-policy"
              },
              "Name": "Meta - Privacy Policy",
              "PublishedAt": "2023-02-15T16:36:22.088Z",
              "ContentID": "Content_3a97504e-0b9b-4114-a8cf-04ea4af379ff"
          }
      ]
  },
  "Name": "Footer",
  "PublishedAt": "2023-02-15T16:36:22.056Z",
  "ContentID": "Content_30c29898-24c0-4f21-ae75-590d3040d629"
}
import React from "react";

let initState = {
  //это тестовые данные
  applications: [
    {
      id: 1,
      createdAt: "2012-01-26T13:51:50.417Z",
      applicant: "",
      descr: "уложить в больницу",
      cat: "мед помощь",
      addr: "Lenina 18",
      tel: "898880000",
      receiverFIO: "",
      receiverTel: "",
      fullDescr: "",
      attachments: [
        {
          id: 1,
          mimeType: "image/jpeg",
          src: "http://www.sarprok.ru/sites/default/files/zakl/1529_001_0.jpg"
        },
        {
          id: 2,
          mimeType: "audio/mpeg",
          src:
            "https://www.soundjay.com/transportation/sounds/train-pass-by-01.mp3"
        },
        {
          id: 3,
          mimeType: "video/mp4",
          src:
            "https://www.videvo.net/videvo_files/converted/2016_10/preview/160929_168_London_AmbulanceNight_1080p.mp442693.webm"
        },
        {
          id: 4,
          mimeType: "application/pdf",
          src:
            "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf"
        },
        {
          id: 5,
          mimeType: "image/jpeg",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisaSkKTqrd0iUqdHo6RpQy0wvZ7M7zpJtuhFZP5wv5OZGS7iZ&s"
        },
        {
          id: 6,
          mimeType: "video/mp4",
          src:
            "https://ak8.picdn.net/shutterstock/videos/1036326278/preview/stock-footage-new-york-city-usa-nd-of-june-an-ambulance-with-siren-in-new-york-city-at-night-sound.webm"
        },
        {
          id: 7,
          mimeType: "application/msword",
          src:
            "https://docs.google.com/document/d/11rFza4o54IF1iHuBg4jVUgs8jH3FO0XgfczbIunaecw/edit"
        }
      ],
      states: [
        ,
        { id: 0, status: "SentToFoundations", updatedAt: "" },
        {
          id: 1,
          status: "InWork",
          updatedAt: ""
        },
        { id: 2, status: "HelpGiven", updatedAt: "" },
        { id: 3, status: "Finished", updatedAt: "" },
        {
          id: 4,
          status: "Inspection",
          updatedAt: ""
        },
        { id: 5, status: "GivingHelp", updatedAt: "" }
      ],
      currentStatus: ""
    },
    {
      id: 2,
      createdAt: "2012-01-26T13:51:50.417Z",
      applicant: "",
      descr: "уложить в больницу",
      cat: "мед помощь",
      addr: "Lenina 18",
      tel: "898880000",
      receiverFIO: "",
      receiverTel: "",
      fullDescr: "",
      attachments: [
        {
          mimeType: "image/jpeg"
        },
        {
          mimeType: "image/jpeg"
        },
        {
          mimeType: "image/jpeg"
        }
      ],
      states: [
        { id: 1, status: "SendToFoundations", updatedAt: "" },
        {
          id: 2,
          status: "InWork",
          updatedAt: ""
        },
        { id: 3, status: "HelpGiven", updatedAt: "" },
        { id: 4, status: "Finished", updatedAt: "" },
        {
          id: 5,
          status: " Inspection",
          updatedAt: ""
        },
        { id: 6, status: "GivingHelp", updatedAt: "" }
      ],
      currentStatus: ""
    },
    {
      id: 3,
      createdAt: "2012-01-26T13:51:50.417Z",
      applicant: "",
      descr: "уложить в больницу",
      cat: "мед помощь",
      addr: "Lenina 18",
      tel: "898880000",
      receiverFIO: "",
      receiverTel: "",
      fullDescr: "",
      attachments: [
        {
          mimeType: "image/jpeg"
        },
        {
          mimeType: "image/jpeg"
        },
        {
          mimeType: "image/jpeg"
        }
      ],
      states: [
        { id: 1, status: "SendToFoundations", updatedAt: "" },
        {
          id: 2,
          status: "InWork",
          updatedAt: ""
        },
        { id: 3, status: "HelpGiven", updatedAt: "" },
        { id: 4, status: "Finished", updatedAt: "" },
        {
          id: 5,
          status: " Inspection",
          updatedAt: ""
        },
        { id: 6, status: "GivingHelp", updatedAt: "" }
      ],
      currentStatus: ""
    }
  ],
  tasks: [
    {
      id: 1,
      descr: "уложить в больницу",
      cat: "мед помощь",
      addr: "Lenina 18",
      tel: "898880000"
    },
    {
      id: 2,
      descr: "уложить в больницу",
      cat: "мед помощь",
      addr: "Lenina 18",
      tel: "898880000"
    },
    {
      id: 3,
      descr: "уложить в больницу",
      cat: "мед помощь",
      addr: "Lenina 18",
      tel: "898880000"
    }
  ],
  newApplication: {
    id: "",
    createdAt: new Date(),
    applicant: "",
    descr: "",
    cat: "",
    addr: "",
    tel: "",
    receiverFIO: "",
    receiverTel: "",
    fullDescr: "",
    attachments: [],
    states: [
      { id: 1, status: "SendToFoundations", updatedAt: "" },
      {
        id: 2,
        status: "InWork",
        updatedAt: ""
      },
      { id: 3, status: "HelpGiven", updatedAt: "" },
      { id: 4, status: "Finished", updatedAt: "" },
      {
        id: 5,
        status: " Inspection",
        updatedAt: ""
      },
      { id: 6, status: "GivingHelp", updatedAt: "" }
    ],
    currentStatus: ""
  },
  page: 1,
  singleApplicationIndex: 0,
  applicationsTable: {
    errorCode: 0,
    errorMessage: "",
    showErrorSnack: false
  },
  currentOpenedAudioFileIndex: 0,
  currentOpenedImageFileIndex: 0,
  currentOpenedVideoFileIndex: 0,
  currentOpenedPDFFileIndex: 0
};
export const getSingleApplicationIndex = index => {
  return { type: "GET-APPLICATION-INDEX", singleApplicationIndex: index };
};
export const ChangeFlag = (index, isOpened) => {
  return { type: "CHANGE-FLAG", index: index, isOpened: isOpened };
};
export const setFlagsForOpen = () => {
  return { type: "SET-FLAGS-FOR-OPEN" };
};
export const registerApplContainerError = (status, message) => {
  return { type: "APPLCONTAINER-REG-ERROR", status: status, message: message };
};
export const clearApplContainerError = (status, message) => {
  return {
    type: "APPLCONTAINER-CLEAR-ERROR",
    status: status,
    message: message
  };
};

export const curatorPageReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET-APPLICATIONS":
      return state;
    case "GET-APPLICATION-INDEX":
      return {
        ...state,
        singleApplicationIndex: action.singleApplicationIndex
      };
    case "EDIT-APPLICATION":
      let attachments =
        state.applications[state.singleApplicationIndex].attachments;
      let copiedAppl = state.applications[state.singleApplicationIndex];
      return {
        ...state,
        applications: state.applications.map(appl =>
          appl.id === state.applications[state.singleApplicationIndex].id
            ? {
                ...copiedAppl,
                attachments: attachments,
                [action.name]: action.value
              }
            : appl
        )
      };
    case "NEW-APPLICATION-CHANGEFILED":
      let prevNewAppl = state.newApplication;

      return {
        newApplication: { ...prevNewAppl, [action.name]: action.value }
      };
    case "APPLCONTAINER-REG-ERROR":
      return {
        ...state,
        applicationsTable: {
          errorCode: action.status,
          errorMessage: action.message,
          showErrorSnack: true
        }
      };
    case "APPLCONTAINER-CLEAR-ERROR":
      return {
        ...state,
        applicationsTable: {
          errorCode: 0,
          errorMessage: "",
          showErrorSnack: false
        }
      };
    case "SET-OPEN-IMAGEFILE-INDEX":
      return { ...state, currentOpenedImageFileIndex: action.index };
    case "SET-OPEN-AUDIOFILE-INDEX":
      return { ...state, currentOpenedAudioFileIndex: action.index };
    case "SET-OPEN-VIDEOFILE-INDEX":
      return { ...state, currentOpenedVideoFileIndex: action.index };
    case "SET-OPEN-PDFFILE-INDEX":
      return { ...state, currentOpenedPDFFileIndex: action.index };
    case "SET-FLAGS-FOR-OPEN":
      let prevApplications = state.applications;
      prevApplications.forEach(apl => {
        apl.attachments.forEach((doc, index) => {
          apl.attachments[index] = { ...doc, open: false };
        });
      });
      return { ...state, applications: prevApplications };
    case "CHANGE-FLAG":
      let beforeApplications = state.applications;
      beforeApplications.forEach(apl => {
        apl.attachments[action.index] = {
          ...apl.attachments[action.index],
          open: action.isOpened
        };
      });
      return { ...state, applications: beforeApplications };
    default:
      return state;
  }
};

var APP_DATA = {
  "scenes": [
    {
      "id": "0-stone-plate-of-nus-law",
      "name": "Stone Plate of NUS Law",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.108860411789884,
        "pitch": 0.008041619001662781,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.659665850493905,
          "pitch": -0.040171630093521316,
          "rotation": 0.7853981633974483,
          "target": "1-c-j-koh-law-library"
        },
        {
          "yaw": 1.86751363710228,
          "pitch": 0.11275238930343257,
          "rotation": 0.7853981633974483,
          "target": "2-the-summit-canteen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.04481063384463,
          "pitch": -0.06583680550086868,
          "title": "Stone Plate of NUS Law",
          "text": "A structure to identify the faculty"
        },
        {
          "yaw": -0.06661473320234812,
          "pitch": -0.3194063875069517,
          "title": "Singapore Botanic Gardens",
          "text": "The faculty of law is near an entrance to the Singapore Botanic Gardens. Feel free to go for a nature walk if you want to take a breather from studies!"
        }
      ]
    },
    {
      "id": "1-c-j-koh-law-library",
      "name": "C J Koh Law Library",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5751832746034218,
          "pitch": 0.00005963037525091863,
          "rotation": 5.497787143782138,
          "target": "2-the-summit-canteen"
        },
        {
          "yaw": 1.5767030669948925,
          "pitch": 0.12431302955943657,
          "rotation": 0,
          "target": "0-stone-plate-of-nus-law"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.018277665176686497,
          "pitch": 0.026588783373838965,
          "title": "Entrance to C J Koh Law Library",
          "text": "This is where students enter the library when they want to read books or engage in independent studies."
        }
      ]
    },
    {
      "id": "2-the-summit-canteen",
      "name": "The Summit Canteen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6622394855060207,
          "pitch": 0.0674981368933345,
          "rotation": 0.7853981633974483,
          "target": "1-c-j-koh-law-library"
        },
        {
          "yaw": 0.8827935095574944,
          "pitch": 0.030157748997671874,
          "rotation": 0.7853981633974483,
          "target": "0-stone-plate-of-nus-law"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0723756048600368,
          "pitch": -0.0011968750319493182,
          "title": "The Summit Canteen",
          "text": "This is where students go to when they want to have their meals or a quick coffee fix!"
        }
      ]
    }
  ],
  "name": "Isabella's web-tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

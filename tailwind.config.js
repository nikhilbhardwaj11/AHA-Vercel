/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      // padding: "2rem",
    },
    screens: {
      "2xl": { max: "1920px" },
      // => @media (max-width: 1535px) { ... }
      lxl: { max: "1600px" },
      1500: { max: "1500px" },
      1440: { max: "1440px" },
      xl: { max: "1400px" },
      // => @media (max-width: 1400px) { ... }
      1380: { max: "1380px" },
      mxl: { max: "1350px" },
      1300: { max: "1300px" },
      1280: { max: "1280px" },
      mlg: { max: "1200px" },
      1105:{max : '1105px'},
      1070: { max: "1070px" },
      lg: { max: "1023px" },
      slg: { max: "991px" },
      990: { max: "991px" },
      // => @media (max-width: 1023px) { ... }
      900:{max:"900px"},
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      smd:{max:"700px"},
      sm: { max: "639px" },
      500: { max:"500px" },
      mob: { max:"500px" },

      // => @media (max-width: 639px) { ... }
      xsm: {max:"390px"},
    },

    extend: {
      display: ["group-hover"],

      colors: {
        blue1: "#0A223C",
        blue2: "#0B223C",
        blue3: "#0C2340",
        blue4: "#397081",
        blue5: "#0B62A0",
        blue6: "#333E56",
        blue7: "#001833",
        blue9: "#001833",
        "border-gr": "#77777780",
        "light-gray": "#F7F7F7",
        grayBg: "#E8E8E8",
        gray1: "#E0E0E0",
        gray2: "#545454",
        gray3: "#4F4F4F",
        gray4: "#DADADA",
        gray5: "#C5C5C5",
        gray6: "#6C6C6F",
        gray7: "#B5B5B5",
        gray8: "#7C7C7C",
        gray9: "#F5F5F5",
        gray10: "#BCBCBC",
        gray11: "#5B5B5B",
        gray12: "#EAEAEA",
        gray13: "#F1F1F1",
        gray14: "#CCCCCC",
        gray15: "#B2B2B3",
        gray16: "#DBDBDB",
        gray17: "#F6F6F6",
        gray18: "#D9D9D9",
        gray19: "#C4C4C4",
        gray20: "#3C3C44",
        gray21: "#D6D6D6",
        gray22: "#D9D9D9",
        gray23: "#737373",
        gray24: "#BBBBBB",
        gray25: "#828282",
        gray26: "#A2A2A2",
        gray27: "#F1F3F6",
        gray28: "#BEBEBE",
        gray29: "#575757",
        gray40: "#5A607F",
        gray41: "#323333",
       

        gray30: "#535353",
        gray31: "#707070",
        gray32: "#F4F6F8",
        peach1: "#F8F8F8",
        peach2: "#E1E1E1",
        quickView: " #D9D9D9B2",
        // gray30: "#3C3C43",
        red1: "#CA082E",
        red2: "#D80000",
        red3: "#CE000E",
        orange1: "#E07521",
        orange2: "#EA1846",
        green1: "#007600",
        green2: "#486A40",
        green3: "#1F7512",
        black1: "#020206",
        black2: "#252525",
        black3: "#010101",
        black4: "#4A4A4A",
        white: "#FFFFFF",
        mobileBG: "#E8E8E8",
        bannerBG:
          "linear-gradient(0deg, #000000 0%, rgba(79, 79, 79, 0.795) 41%, rgba(192, 192, 192, 0.5) 100%)",
        skyGreen: "#D3FFED",
        skyDarkGreen: "#93DEBE",
        "white-trans": "#ffffffa3",
        "white-trans1": "#ffffff99",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      padding: {
        p10: "10px",
        p18: "18px",
        p9: "9px",
      },
      maxWidth: {
        1920: "1920px",
        1440: "1440px",
        932: "932px",
        340: "340px",
        235: "235px",
        topSlider: "calc(100vw - 364px)",
        fullTopSlider: "calc(100vw - 64px)",
        fullTopSliderMobile: "calc(100vw - 45px)",
        filterMaxWidth: "calc(100vw - 32px)",
        40:"calc(100% - 50px)",

      },
      maxHeight: {
        290: "calc(100vh - 290px)",
        343: "calc(100vw - 343px)",
        230: " calc(100vh - 230px)",
        310: " calc(100vh - 310px)",
        400: " calc(100vh - 400px)",
        '20px':"calc(100vh - 20px)",
        StoreSideBar:"calc(100vh - 275px)",
        PLPSideBar:"calc(100vh - 336px)",
        mobilePLPSideBar:"calc(100vh - 282px)",
        MobileMenuHeight: "calc(100vh - 57px)",
        88:"calc(100vh - 88px)",
        RebateSidebar: "calc(100vh - 171px) ",
        110: "calc(100vh - 110px)"
      },
      minWidth: {
        340: "340px",
        244: "244px",
      },
      minHeight: {
        107: "107px",
        57:"calc(100vh - 57px)",
      },
      width: {
        82: "calc(50% + 82px)",
        topSlider: "calc(100vw - 364px)",
        modalWidthMobile: "calc(100% - 40px)",
        "100vw": "100vw",
      },
      gridTemplateRows: {
        auto1fr: "auto 1fr",
      },
      gridTemplateColumns: {
        102: "repeat(auto-fit, minmax(102px, 1fr))",
        150: "repeat(auto-fit, minmax(150px, 1fr))",

        189: "repeat(auto-fill, minmax(189px, 1fr))",
        192: "repeat(auto-fill, minmax(192px, 1fr))",
        200: "repeat(auto-fill, minmax(200px, 1fr))",
        203: "repeat(auto-fill, minmax(203px, 1fr))",
        215: "repeat(auto-fill, minmax(215px, 1fr))",

        220: "repeat(auto-fill, minmax(220px, 1fr))",
        226: "repeat(auto-fill, minmax(226px, 1fr))",

        237: "repeat(auto-fill, minmax(237px, 1fr))",
        283: "repeat(auto-fill, minmax(283px, 1fr))",
        308: "repeat(auto-fill, minmax(308px, 1fr))",

        352: "repeat(auto-fill, minmax(352px, 1fr))",
        "spec-col": " 0.7fr 1fr 0.7fr",
        "1frAuto": "1fr auto",
        "Auto1fr": "auto 1fr",
        "24-1fr": "24px 1fr",
        "286-fill": "repeat(auto-fill, minmax(286px, 1fr))",
        "312-fill": "repeat(auto-fill, minmax(312px, 1fr))",

        // "20%": "repeat(5, 20%)",
        "20%": " 224px repeat(auto-fit, minmax(100px, 1fr)) ",
        437: "437px 1fr",
        50: "50px 1fr",
        58: "58px 1fr",
        374: "374px 1fr",
        146: "1fr 160px",
        140: " 140px 1fr",
        Card120: "120px 1fr auto",
        RebateFilter: " auto 1fr auto auto"
      },
      height: {
        42: "42px",
        searchFocus:" calc(100vh - 78px) "
      },
      
      fontSize: {
        26: "26px",
      },
      lineHeight: {
        12: "12px",
        14: "14px",
        22: "22px",
        38: "38px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        10: "10px",
        20: "20px",
      },
      boxShadow: {
        2.86: "0px 0px 2.86px 0px #00000026",
        15.9: "0px 0px 15.9px 0px #0000005C",
        11: " 0px 0px 11px 0px #0000001C",
        11.3: " 0px -3px 11.3px 0px #0000001A ",
        4: " 0px 1px 4px 0px #00000017",
        2: "0px 1px 2px 0px #00000033",
        inset11: "0px -3px 11.3px 0px #0000001A inset",
        inset8: "0px -3px 8px 0px #00000012 inset",
        dropdownShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        brandCard:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        filterBoxShadow: "linear-gradient(180deg, transparent 4.83%, #fff 70.64%)"
      },
      backgroundImage: {
        rebateBanner:"linear-gradient(180deg, rgba(0, 0, 0, 0) 15.2%, #000000 100%)",
        filterBoxShadow: "linear-gradient(180deg, transparent 4.83%, #fff 73.64%)"

      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

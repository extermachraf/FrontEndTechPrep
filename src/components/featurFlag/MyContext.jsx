import React, { useContext } from "react";
import SwitchTheme from "../switchTheme/SwitchTheme";
import TicTac from "../ticTacTo/TicTac";
import RandomColor from "../random-color/RandomColor";
import Accordian from "../accordian/Accordian";
import ImageSlider from "../imageSlider/ImageSlider";
import { FeatureFlagContext } from "./context/FeatureFlagGlobalContext";
export default function MyContext() {
  const { loading, enableFlag } = useContext(FeatureFlagContext);

  const componenetsToRender = [
    {
      key: "showLightAndDarkMode",
      componenet: <SwitchTheme />,
    },
    {
      key: "showTicTacTo",
      componenet: <TicTac />,
    },
    {
      key: "showRandomColore",
      componenet: <RandomColor />,
    },
    {
      key: "showAccordian",
      componenet: <Accordian />,
    },
    {
      key: "showImageSlider",
      componenet: (
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={10}
          page={1}
        />
      ),
    },
  ];

  function checkEnableFlags(CurrentKey) {
    return enableFlag[CurrentKey];
  }

  if (loading) return <h1>Loading ...</h1>;
  return (
    <div>
      {componenetsToRender.map((componenetItem) =>
        checkEnableFlags(componenetItem.key) ? componenetItem.componenet : null
      )}
    </div>
  );
}

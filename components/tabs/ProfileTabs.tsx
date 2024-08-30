import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { LayoutChangeEvent } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useDerivedValue,
  interpolateColor,
} from "react-native-reanimated";
import { Colors } from "@/constants/Colors";

type IndicatorProps = {
  width: number;
  animatedStyle: any;
  theme: { text: string };
};
const Indicator = ({ width, animatedStyle, theme }: IndicatorProps) => {
  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          position: "absolute",
          backgroundColor: theme.text,
          opacity: 0.7,
          height: 2,
          width: width,
          bottom: -7,
        },
      ]}
    />
  );
};

type TabButtonProp = {
  onButtonLayout: any;
  onTabPress: any;
  buttons: any;
  button: { title: string };
  active: number;
  index: number;
  setActive: (index: number) => void;
  theme: { text: string };
};

const TabButton = ({
  index,
  onButtonLayout,
  onTabPress,
  buttons,
  button,
  active,
  setActive,
  theme,
}: TabButtonProp) => {
  const progress = useDerivedValue(() => {
    return buttons[active].title === button.title
      ? withTiming(5)
      : withTiming(0);
  }, [active]);

  const textAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 5],
      [Colors.placeholder, theme.text]
    );

    return { color };
  });
  return (
    <Pressable
      onLayout={onButtonLayout}
      onPress={() => {
        onTabPress(index);
        setActive(index);
      }}
      style={{ marginRight: 12 }}
    >
      <Animated.Text
        style={[
          {
            fontSize: 16,
          },
          textAnimatedStyle,
        ]}
      >
        {button.title}
      </Animated.Text>
    </Pressable>
  );
};

export type TabButtonType = {
  title: string;
};

type TabButtonsProps = {
  buttons: TabButtonType[];
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};

const TabButtons = ({
  buttons,
  selectedTab,
  setSelectedTab,
}: TabButtonsProps) => {
  const [buttonDimensions, setButtonDimensions] = useState(0);
  const [active, setActive] = useState(0);
  const isDarkTheme = useColorScheme() === "dark";
  const theme =
    useColorScheme() === "light" ? { ...Colors.light } : { ...Colors.dark };

  const tabPositionX = useSharedValue(selectedTab);

  const onButtonLayout = (e: LayoutChangeEvent) => {
    setButtonDimensions(e.nativeEvent.layout.width + 3);
  };

  const handlePress = (index: number) => {
    setSelectedTab(index);
  };

  const onTabPress = (index: number) => {
    tabPositionX.value = withTiming((buttonDimensions + 10) * index, {}, () => {
      runOnJS(handlePress)(index);
    });
    setActive(index);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: tabPositionX.value,
        },
      ],
    };
  });

  return (
    <View>
      <View style={{ marginRight: 20, flexDirection: "row" }}>
        {buttons &&
          buttons.map((button, index) => (
            <TabButton
              key={index}
              index={index}
              buttons={buttons}
              onButtonLayout={onButtonLayout}
              onTabPress={onTabPress}
              button={button}
              active={active}
              setActive={setActive}
              theme={theme}
            />
          ))}
      </View>
      <Indicator
        width={buttonDimensions}
        animatedStyle={animatedStyle}
        theme={theme}
      />
    </View>
  );
};

export enum CustomTab {
  Tab1,
  Tab2,
}

type TabsProps = {
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};
const Tabs = ({ selectedTab, setSelectedTab }: TabsProps) => {
  const buttons: TabButtonType[] = [{ title: "Recipes" }, { title: "Minced" }];

  return (
    <View style={{}}>
      <View style={{ flexDirection: "row" }}>
        <TabButtons
          buttons={buttons}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </View>
    </View>
  );
};

export default function ProfileTabs({ selectedTab, setSelectedTab }: any) {
  return (
    <View>
      <View style={{ marginBottom: 20 }}>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

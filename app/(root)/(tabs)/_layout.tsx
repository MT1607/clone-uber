import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";
import { icons } from "@/constants";
const TabIcon = ({
  focused,
  source,
}: {
  focused: boolean;
  source: ImageSourcePropType;
}) => (
  <View
    className={`flex flex-row items-center justify-center rounded-full ${focused ? "bg-general-300" : ""}`}
  >
    <View
      className={`flex flex-row items-center w-12 h-12 justify-center rounded-full ${focused ? "bg-general-400" : ""}`}
    >
      <Image
        source={source}
        resizeMode={"contain"}
        className={"w-7 h-7"}
        tintColor={"white"}
      />
    </View>
  </View>
);

const Layout = () => (
  <Tabs
    initialRouteName={"index"}
    screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "white",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#333333",
        borderRadius: 50,
        paddingBottom: 0,
        overflow: "hidden",
        marginHorizontal: 20,
        marginBottom: 20,
        height: 78,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
      },
    }}
  >
    <Tabs.Screen
      name={"home"}
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.home} />
        ),
      }}
    />

    <Tabs.Screen
      name={"rides"}
      options={{
        title: "Rides",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.list} />
        ),
      }}
    />
    <Tabs.Screen
      name={"chat"}
      options={{
        title: "Chat",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.chat} />
        ),
      }}
    />
    <Tabs.Screen
      name={"profile"}
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.profile} />
        ),
      }}
    />
  </Tabs>
);

export default Layout;

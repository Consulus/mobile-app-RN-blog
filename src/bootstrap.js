import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    "open-bold": require("../assets/fonts/Roboto_Slab/static/RobotoSlab-Bold.ttf"),
    "open-regular": require("../assets/fonts/Roboto_Slab/static/RobotoSlab-Regular.ttf"),
  });
}

import { View, Image } from "react-native"

import { User } from "@/components/User"
import { Skills } from "../components/Skills"

interface ProfileProps {}

export function Profile({ ...rest }: ProfileProps) {
  return (
    <View className="flex-1 bg-gray-700">
      <Image
        source={require("@/assets/banner.png")}
        className="w-full h-52 -mb-16"
      />

      <View className="flex-1 px-4 pb-b">
        <User />

        <Skills />
      </View>
    </View>
  )
}

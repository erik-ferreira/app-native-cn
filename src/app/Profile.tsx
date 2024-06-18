import { View, Image } from "react-native"

import { User } from "@/components/User"

interface ProfileProps {}

export function Profile({ ...rest }: ProfileProps) {
  return (
    <View className="flex-1 items-center bg-gray-700">
      <Image
        source={require("@/assets/banner.png")}
        className="w-full h-52 -mb-16"
      />

      <User />
    </View>
  )
}

import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native"

import { User } from "@/components/User"
import { Input } from "@/components/Input"
import { Skills } from "@/components/Skills"
import { Preferences } from "@/components/Preferences"
import { Button } from "@/components/Button"
import { useToast } from "@/components/Toast"

interface ProfileProps {}

export function Profile({ ...rest }: ProfileProps) {
  const { toast } = useToast()

  return (
    <View className="flex-1 bg-gray-700">
      <ScrollView>
        <Image
          source={require("@/assets/banner.png")}
          className="w-full h-52 -mb-16"
        />

        <View className="flex-1 px-4 pb-b">
          <User />

          <Skills />

          <Preferences />

          <View className="w-full mt-6 flex-1">
            <Input label="Company" placeholder="Company" inputClasses="mb-6" />

            <Button
              label="Save"
              className="border border-green-500"
              onPress={() => toast("Save")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

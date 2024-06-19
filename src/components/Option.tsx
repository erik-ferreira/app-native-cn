import { ReactNode } from "react"
import { Text, TextProps, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"

interface OptionProps {
  children: ReactNode
}

function Option({ children, ...rest }: OptionProps) {
  return (
    <View className="w-full flex-row items-center gap-2 border-b border-gray-500 py-3">
      {children}
    </View>
  )
}

interface IconProps {
  icon: keyof typeof MaterialIcons.glyphMap
}

function Icon({ icon, ...rest }: IconProps) {
  return <MaterialIcons name={icon} size={20} color={colors.white} {...rest} />
}

interface TitleProps extends TextProps {}

function Title({ ...rest }: TitleProps) {
  return <Text className="text-white text-lg flex-1" {...rest} />
}

Option.Title = Title
Option.Icon = Icon

export { Option }

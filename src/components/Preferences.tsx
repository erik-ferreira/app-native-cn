import { View, Text } from "react-native"

import { Title } from "@/components/Title"
import { Option } from "@/components/Option"

// import {} from "./styles"

interface PreferencesProps {}

export function Preferences({ ...rest }: PreferencesProps) {
  return (
    <View>
      <Title>Hello</Title>

      <Option>
        <Option.Icon icon="dark-mode" />
        <Option.Title>Dark Mode</Option.Title>
      </Option>
    </View>
  )
}

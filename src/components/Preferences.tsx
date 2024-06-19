import { useState } from "react"
import { View } from "react-native"

import { Title } from "@/components/Title"
import { Option } from "@/components/Option"
import { Switch } from "@/components/Switch"

export function Preferences() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <View>
      <Title>Hello</Title>

      <Option>
        <Option.Icon icon="dark-mode" />
        <Option.Title>Dark Mode</Option.Title>

        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </Option>
    </View>
  )
}

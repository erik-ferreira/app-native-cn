import { View, Text } from "react-native"

interface ProfileProps {}

export function Profile({ ...rest }: ProfileProps) {
  return (
    <View
      className="flex-1 bg-black items-center justify-center"
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Hello</Text>
    </View>
  )
}

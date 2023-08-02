import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemCardContainer = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemScreen", { param: data })}
      className="rounded-md border border-gray-200 space-y-2 px-3 py-2 shadow-sm bg-white w-[180px] my-2"
    >
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />

      <Text className="text-[#428288] text-[16px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
      </Text>

      <View className="flex-row items-center space-x-1">
        <FontAwesome name="map-marker" size={20} color="#8597a2" />
        <Text className="text-[#428288] text-[13px] font-bold">
          {location?.length > 18 ? `${location.slice(0, 18)}...` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;

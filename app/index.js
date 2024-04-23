import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import notify from "../assets/Notification.png";
import React from "react";
import icons from "../assets/Activity.png";
import sort from "../assets/Buttonsort.png";
import user from "../assets/image1.png";
import per from "../assets/Amount.png";
import per1 from "../assets/Amount(1).png";
const index = () => {
  return (
    <View className="bg-[#f1f1f1]">
      <View className="py-5 px-5 ">
        <View className="rounded-3xl p-5 bg-[#2FA0C5] text-white">
          <View className="flex flex-row justify-between items-center p-1">
            <View className="w-[48px] shadow-xl shadow-black h-[48px] bg-white rounded-full"></View>
            <View>
              <View className="flex flex-row">
                <Text className="text-white/60 text-[17px]">
                  Welcome Back,{" "}
                </Text>
                <Text className="text-[17px] text-white">Sujal!</Text>
              </View>
            </View>
            <View>
              <View className="rounded-lg shadow-xl shadow-black bg-[#6eb7cf]">
                <Image source={notify} />
              </View>
            </View>
          </View>
          <View>
            <Text className="text-center text-[64px] font-semibold text-white shadow-md shadow-black/60">
              56
            </Text>
            <Text className="text-center text-medium text-[18px] text-white">
              Spam Secured
            </Text>
          </View>
          <View className="mt-5 mb-1 p-1">
            <Image source={icons} />
          </View>
        </View>
        <View className="mx-auto py-10">
            <Link href="">
                <Pressable>
                  <Link href = "/spamCheck">
                      <View className="border-2 border-[#2FA0C5] shadow-black shadow-lg rounded-3xl px-3 py-4">
                      <Text className="text-black hover:text-white hover:bg-[#2FA0C5] font-semibold text-[18px]">Check a Message</Text>
                  </View>
                  </Link>
                    
                </Pressable>
                
            </Link>
            
        </View>
      </View>
      <View className="shadow px-5 py-6 rounded-xl bg-white">
        <ScrollView>
            <View>
               <View className="flex flex-row justify-between">
            <Text className="font-bold text-[24px]">Recents</Text>
            <Image source={sort} />
          </View>
         <View className="flex flex-col gap-y-5">
            <View>
                <View className="flex flex-row justify-between items-center mt-4">
                    <View>
                        <View className="flex flex-row gap-x-3">
                            <View><Image source={user} className="rounded-full"/></View>
                            
                            <View className="ms-7">
                                <Text className="text-[20px] font-bold">Unkown</Text>
                                <Text className="text-black/50">Today, at 4:17AM</Text>
                            </View>
                        </View>
                    </View>
                    <View><Image source={per}/></View>
                </View>
            </View>
            <View>
                <View className="flex flex-row justify-between items-center mt-4">
                    <View>
                        <View className="flex flex-row gap-x-3">
                            <View><Image source={user} className="rounded-full"/></View>
                            
                            <View className="ms-7">
                                <Text className="text-[20px] font-bold">Unkown</Text>
                                <Text className="text-black/50">Today, at 4:17AM</Text>
                            </View>
                        </View>
                    </View>
                    <View><Image source={per1}/></View>
                </View>
            </View>
            <View>
                <View className="flex flex-row justify-between items-center mt-4">
                    <View>
                        <View className="flex flex-row gap-x-3">
                            <View><Image source={user} className="rounded-full"/></View>
                            
                            <View className="ms-7">
                                <Text className="text-[20px] font-bold">Unkown</Text>
                                <Text className="text-black/50">Today, at 4:17AM</Text>
                            </View>
                        </View>
                    </View>
                    <View><Image source={per}/></View>
                </View>
            </View>

         </View> 
            </View>
          
        </ScrollView>
      </View>
    </View>
  );
};

export default index;

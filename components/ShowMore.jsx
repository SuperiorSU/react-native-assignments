import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'

const ShowMore = () => {
    const [showData, setShowData] = useState(true);
    const data = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem beatae quas, tempore quisquam nisi aperiam iure placeat obcaecati consequatur inventore. Minima quaerat, magnam quae tempore doloremque assumenda accusantium odio voluptatum? Voluptatibus nostrum in earum nam cum dolor necessitatibus aliquam ut fuga obcaecati quidem aliquid, distinctio pariatur placeat voluptates dicta quis odio iusto id optio corrupti dolorum est? Neque, similique deleniti culpa atque ipsa at non esse officia magni doloribus quis fugiat debitis sequi assumenda natus expedita earum veritatis! Velit id culpa officia incidunt, consequuntur neque deserunt minus odio possimus ab vero dignissimos qui? Expedita velit id unde molestias illum explicabo magnam nam laudantium nisi voluptatum placeat nobis, cum cupiditate animi. Repudiandae velit, earum quas labore voluptates vero, ex quaerat aliquid laborum voluptatum dignissimos doloremque aut repellat eaque corrupti libero impedit officiis debitis. Amet cupiditate sunt odio dolor officiis est eos velit quasi, unde suscipit fuga! Eos accusamus hic laborum."

    return (
        <View style={{ padding: 16 }}>
            <ScrollView>
                <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#6366f1' }}>Show More Text</Text>
                <Text style={{ fontSize: 18, textAlign: 'justify', padding: 12 }}>
                    {
                        showData ? data : `${data.slice(0, 50)}...`
                    }
                </Text>
                <Pressable style={{ backgroundColor: '#cbd5e1', paddingVertical: 8, width: 144, alignSelf: 'center', marginTop: 16 }} onPress={() => setShowData(!showData)}>
                    <Text style={{ textAlign: 'center', color: '#6366f1', fontWeight: 'bold', fontSize: 18 }}>
                    {
                        showData ? "Show Less" : "Show More"
                    }
                    </Text>
                </Pressable>                
            </ScrollView>
        </View>
    )
}

export default ShowMore

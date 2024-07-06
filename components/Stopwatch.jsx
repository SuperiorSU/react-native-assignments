import { View, Text, SafeAreaView, Pressable } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

const Stopwatch = () => {
    const [running, setRunning] = useState(false);
    const [hour, setHour] = useState(0); 
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [millisecond, setMillisecond] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setMillisecond(prevMillisecond => {
                    if (prevMillisecond + 1 === 100) {
                        setSecond(prevSecond => {
                            if (prevSecond + 1 === 60) {
                                setMinute(prevMinute => {
                                    if (prevMinute + 1 === 60) {
                                        setHour(prevHour => prevHour + 1);
                                        return 0;
                                    }
                                    return prevMinute + 1;
                                });
                                return 0;
                            }
                            return prevSecond + 1;
                        });
                        return 0;
                    }
                    return prevMillisecond + 1;
                });
            }, 10);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [running]);

    const start = () => {
        setRunning(true);
    };

    const stop = () => {
        setRunning(false);
    };

    const reset = () => {
        setRunning(false);
        setHour(0);
        setMinute(0);
        setSecond(0);
        setMillisecond(0);
    };

    const formatTime = (unit) => String(unit).padStart(2, '0');
    const time = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}:${formatTime(millisecond)}`;

    return (
        <SafeAreaView className="flex items-center p-3">
            <View className="w-full h-80 my-auto rounded-lg p-5 bg-indigo-500">
                <View className="my-auto">
                    <Text className="text-6xl text-white text-center">{time}</Text>
                </View>
                <View className="flex flex-row justify-center gap-x-5">
                    <Pressable className="bg-green-500 p-3 rounded-full" onPress={start}>
                        <Text className="text-white">START</Text>
                    </Pressable>
                    <Pressable className="bg-red-500 p-3 rounded-full" onPress={stop}>
                        <Text className="text-white">STOP</Text>
                    </Pressable>
                    <Pressable className="bg-yellow-500 p-3 rounded-full" onPress={reset}>
                        <Text className="text-white">RESET</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Stopwatch;

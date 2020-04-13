import React, { useState, useEffect } from 'react';
import { 
    SafeAreaView, FlatList, Text, StyleSheet,
    StatusBar, TouchableOpacity
} from 'react-native';

import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Mobile Project #${Date.now()}`,
            owner: 'Ermogenes',
            techs: ['React Native', 'NodeJS'],
        });

        const project = response.data;
        setProjects([...projects, project]);
    }

    useEffect(() => {
        api.get('/projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        });
    }, []);

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}>
                            {project.title}
                        </Text>                    
                    )}
                />
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.button}
                    onPress={handleAddProject}
                >
                    <Text style={styles.buttonText}>Add project</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    project: {
        fontSize: 24,
        color: '#fff',
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,

    },
});
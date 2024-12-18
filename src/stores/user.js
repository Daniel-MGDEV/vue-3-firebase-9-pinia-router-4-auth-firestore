import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from '../router';
import { useDatabaseStore } from "./database";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: null,
        loadingUser: false,
        loadingSession: false,
    }),
    actions: {
        async registerUser(email, password){
            this.loadingUser = true
            try {
                const {user} = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = {email: user.email, uid: user.uid}
                router.push('/')
            } catch (error) {
                console.log(error)
            } finally {
                this.loadingUser = false
            }
        },
        async loginUser(email, password) {
            this.loadingUser = true
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password);
                this.userData = {email: user.email, uid: user.uid}
                router.push('/')
            } catch (error) {
                console.log(error);   
            } finally {
                this.loadingUser = false
            }
        },
        async logoutUser(){
            const databaseStore = useDatabaseStore()
            databaseStore.$reset()
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login')
            } catch (error) {
                console.log(error);
            }
        },
        currentUser() {
            return new Promise((resolve, reject) => {
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                    if (user) {
                        this.userData = { email: user.email, uid: user.uid };
                        resolve(user);
                    } else {
                        this.userData = null;
                        const databaseStore = useDatabaseStore()
                        databaseStore.$reset()
                        resolve(null);  // Resuelve con `null` si no hay usuario autenticado
                    }
                    // No desuscribas inmediatamente
                }, (error) => {
                    console.error("Error en la autenticación:", error);
                    reject(error);  // Rechaza la promesa en caso de error
                });
                
                // Puedes desuscribirte cuando el componente se desmonte o cuando sea necesario.
                // No llames a unsubscribe aquí.
            });
        }
    },
})
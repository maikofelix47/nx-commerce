export interface FirebaseLoginResponse{
    user: FirebaseUser;
    providerId: string | null;
    _tokenResponse?:{
        kind: string;
        localId: string;
        email: string;
        displayName: string;
        idToken: string;
        registered: boolean;
        refreshToken: string;        
        expiresIn: string;
    },
    operationType: string;
}

export interface FirebaseUser {
    uid: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerData: [
      {
        providerId: string;
        uid: string;
        displayName: string | null;
        email: string;
        phoneNumber: string | null;
        photoURL: string | null;
      },
    ],
    stsTokenManager: {
      refreshToken: string;
      accessToken: string;
      expirationTime: number;
    },
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
}

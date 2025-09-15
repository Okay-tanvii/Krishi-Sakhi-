import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView,
  StatusBar
} from 'react-native';

export default function KrishiSakhiApp() {
  const [currentPage, setCurrentPage] = useState('language'); // 'language' or 'registration'
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  ];

  const translations = {
    en: {
      welcome: "Welcome to",
      appName: "Krishi Sakhi",
      tagline: "Your Farming Friend",
      selectLanguage: "Select Your Language",
      continue: "Continue",
      hello: "Hello Farmer! 👋",
      registerMessage: "Your trusted farming companion is here to help you grow!",
      name: "Your Name",
      location: "Village/District",
      crop: "Main Crop",
      soilType: "Soil Type",
      irrigation: "Irrigation Method",
      farmSize: "Farm Size (acres)",
      register: "Register Now",
      backToLanguage: "Change Language"
    },
    ml: {
      welcome: "സ്വാഗതം",
      appName: "കൃഷി സഖി",
      tagline: "നിങ്ങളുടെ കൃഷി സുഹൃത്ത്",
      selectLanguage: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
      continue: "തുടരുക",
      hello: "നമസ്കാരം കൃഷിക്കാരേ! 👋",
      registerMessage: "നിങ്ങളുടെ വിശ്വസ്ത കൃഷി സഹായി ഇവിടെ വളരാൻ സഹായിക്കാൻ!",
      name: "നിങ്ങളുടെ പേര്",
      location: "ഗ്രാമം/ജില്ല",
      crop: "പ്രധാന വിള",
      soilType: "മണ്ണിന്റെ തരം",
      irrigation: "ജലസേചന രീതി",
      farmSize: "കൃഷിഭൂമി (ഏക്കർ)",
      register: "ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക",
      backToLanguage: "ഭാഷ മാറ്റുക"
    },
    hi: {
      welcome: "स्वागत है",
      appName: "कृषि सखी",
      tagline: "आपका खेती मित्र",
      selectLanguage: "अपनी भाषा चुनें",
      continue: "जारी रखें",
      hello: "नमस्ते किसान भाई! 👋",
      registerMessage: "आपका विश्वसनीय खेती साथी यहाँ बढ़ने में मदद के लिए है!",
      name: "आपका नाम",
      location: "गांव/जिला",
      crop: "मुख्य फसल",
      soilType: "मिट्टी का प्रकार",
      irrigation: "सिंचाई विधि",
      farmSize: "खेत का आकार (एकड़)",
      register: "अभी पंजीकृत करें",
      backToLanguage: "भाषा बदलें"
    },
    ta: {
      welcome: "வரவேற்கிறோம்",
      appName: "கிருஷி சகி",
      tagline: "உங்கள் விவசாய நண்பர்",
      selectLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
      continue: "தொடரவும்",
      hello: "வணக்கம் விவசாயி! 👋",
      registerMessage: "உங்கள் நம்பகமான விவசாய துணை இங்கே வளர உதவ!",
      name: "உங்கள் பெயர்",
      location: "கிராமம்/மாவட்டம்",
      crop: "முக்கிய பயிர்",
      soilType: "மண்ணின் வகை",
      irrigation: "நீர்ப்பாசன முறை",
      farmSize: "பண்ணை அளவு (ஏக்கர்)",
      register: "இப்போது பதிவு செய்யுங்கள்",
      backToLanguage: "மொழி மாற்று"
    },
    kn: {
      welcome: "ಸ್ವಾಗತ",
      appName: "ಕೃಷಿ ಸಖಿ",
      tagline: "ನಿಮ್ಮ ಕೃಷಿ ಸ್ನೇಹಿತ",
      selectLanguage: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      continue: "ಮುಂದುವರಿಸಿ",
      hello: "ನಮಸ್ಕಾರ ರೈತರೇ! 👋",
      registerMessage: "ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಕೃಷಿ ಸಹಾಯಕ ಇಲ್ಲಿ ಬೆಳೆಯಲು ಸಹಾಯ ಮಾಡಲು!",
      name: "ನಿಮ್ಮ ಹೆಸರು",
      location: "ಗ್ರಾಮ/ಜಿಲ್ಲೆ",
      crop: "ಮುಖ್ಯ ಬೆಳೆ",
      soilType: "ಮಣ್ಣಿನ ಪ್ರಕಾರ",
      irrigation: "ನೀರಾವರಿ ವಿಧಾನ",
      farmSize: "ಫಾರ್ಮ್ ಗಾತ್ರ (ಎಕರೆ)",
      register: "ಈಗ ನೋಂದಾಯಿಸಿ",
      backToLanguage: "ಭಾಷೆ ಬದಲಾಯಿಸಿ"
    }
  };

  const currentLang = translations[selectedLanguage] || translations.en;

  const handleLanguageSelect = (langCode) => {
    setSelectedLanguage(langCode);
    setShowLanguageDropdown(false);
  };

  const handleContinue = () => {
    if (selectedLanguage) {
      setCurrentPage('registration');
    }
  };

  const LanguageSelectionPage = () => (
    <View style={styles.languageContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#2E7D32" />
      
      {/* Header with gradient effect */}
      <View style={styles.languageHeader}>
        <Text style={styles.welcomeText}>{currentLang.welcome}</Text>
        <Text style={styles.appTitle}>{currentLang.appName}</Text>
        <Text style={styles.subtitle}>🌾 {currentLang.tagline} 🌾</Text>
      </View>

      <View style={styles.languageContent}>
        <Text style={styles.selectLanguageText}>{currentLang.selectLanguage}</Text>
        
        <TouchableOpacity 
          style={styles.languageDropdown}
          onPress={() => setShowLanguageDropdown(!showLanguageDropdown)}
        >
          <Text style={styles.languageDropdownText}>
            {selectedLanguage ? 
              `${languages.find(l => l.code === selectedLanguage)?.native} (${languages.find(l => l.code === selectedLanguage)?.name})` : 
              'Choose Language / ഭാഷ തിരഞ്ഞെടുക്കുക'
            }
          </Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </TouchableOpacity>

        {showLanguageDropdown && (
          <View style={styles.languageOptions}>
            {languages.map((lang) => (
              <TouchableOpacity
                key={lang.code}
                style={styles.languageOption}
                onPress={() => handleLanguageSelect(lang.code)}
              >
                <Text style={styles.languageOptionText}>
                  {lang.native} ({lang.name})
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {selectedLanguage && (
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>{currentLang.continue}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const RegistrationPage = () => (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2E7D32" />
      
      {/* Header */}
      <View style={styles.registrationHeader}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => setCurrentPage('language')}
        >
          <Text style={styles.backButtonText}>← {currentLang.backToLanguage}</Text>
        </TouchableOpacity>
        <Text style={styles.appTitleSmall}>{currentLang.appName}</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.welcomeSection}>
          <Text style={styles.helloText}>{currentLang.hello}</Text>
          <Text style={styles.registerMessage}>{currentLang.registerMessage}</Text>
        </View>
        
        <View style={styles.formSection}>
          <TextInput 
            placeholder={currentLang.name}
            style={styles.input} 
            placeholderTextColor="#777"
            autoCapitalize="words"
            autoCorrect={false}
          />
          
          <TextInput 
            placeholder={currentLang.location}
            style={styles.input} 
            placeholderTextColor="#777"
            autoCapitalize="words"
            autoCorrect={false}
          />
          
          <TextInput 
            placeholder={currentLang.crop}
            style={styles.input} 
            placeholderTextColor="#777"
            autoCapitalize="words"
            autoCorrect={false}
          />
          
          <TextInput 
            placeholder={currentLang.soilType}
            style={styles.input} 
            placeholderTextColor="#777"
            autoCapitalize="words"
            autoCorrect={false}
          />
          
          <TextInput 
            placeholder={currentLang.irrigation}
            style={styles.input} 
            placeholderTextColor="#777"
            autoCapitalize="words"
            autoCorrect={false}
          />

          <TextInput 
            placeholder={currentLang.farmSize}
            style={styles.input} 
            placeholderTextColor="#777"
            keyboardType="numeric"
            autoCorrect={false}
          />
          
          <TouchableOpacity 
            style={styles.registerButton}
            activeOpacity={0.8}
          >
            <Text style={styles.registerButtonText}>{currentLang.register}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );

  return currentPage === 'language' ? <LanguageSelectionPage /> : <RegistrationPage />;
}

const styles = StyleSheet.create({
  // Language Selection Styles
  languageContainer: {
    flex: 1,
    backgroundColor: '#E8F5E8',
  },
  languageHeader: {
    backgroundColor: '#2E7D32',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcomeText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 5,
    fontWeight: '300',
  },
  appTitle: {
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#C8E6C9',
    fontStyle: 'italic',
  },
  languageContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  selectLanguageText: {
    fontSize: 22,
    color: '#2E7D32',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  languageDropdown: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  languageDropdownText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#4CAF50',
  },
  languageOptions: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  languageOption: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  languageOptionText: {
    fontSize: 16,
    color: '#333',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 50,
    paddingVertical: 16,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Registration Page Styles
  safeArea: {
    flex: 1,
    backgroundColor: '#F1F8E9',
  },
  registrationHeader: {
    backgroundColor: '#2E7D32',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  appTitleSmall: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  helloText: {
    fontSize: 26,
    color: '#2E7D32',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  registerMessage: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
  },
  formSection: {
    flex: 1,
  },
  input: {
    width: '100%',
    height: 55,
    borderColor: '#4CAF50',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  registerButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
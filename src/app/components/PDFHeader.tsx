import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  logo: {
    width: 120,
    height: 40,
    marginRight: 20,
  },
  contactInfo: {
    flex: 1,
  },
  contactText: {
    fontSize: 10,
    marginBottom: 4,
    color: '#4B5563',
  },
  companyName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1F2937',
  }
});

const PDFHeader = () => (
  <View style={styles.header}>
    <Image
      style={styles.logo}
      src="/images/logo.png"
    />
    <View style={styles.contactInfo}>
      <Text style={styles.companyName}>DeliAsya</Text>
      <Text style={styles.contactText}>Email: deliasyagrupo@gmail.com</Text>
      <Text style={styles.contactText}>WhatsApp: +52 984 316 0169</Text>
      <Text style={styles.contactText}>Phone: 984 316 0169</Text>
      <Text style={styles.contactText}>Manzana 40 lote 6, Avenida Kukulkan, 77760, Tulum, QR, Mexico</Text>
    </View>
  </View>
);

export default PDFHeader;

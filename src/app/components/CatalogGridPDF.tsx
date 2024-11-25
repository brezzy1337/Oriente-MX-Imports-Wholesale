import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import PDFHeader from './PDFHeader';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  unitSize: string;
  caseSize: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  section: {
    margin: 5,
    padding: 5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '30%',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: '100%',
    height: 120,
    objectFit: 'contain',
    marginBottom: 8,
  },
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productInfo: {
    fontSize: 10,
    color: '#4B5563',
    marginBottom: 2,
  },
});

const CatalogGridPDF = ({ products }: { products: Product[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFHeader />
      <View style={styles.section}>
        <View style={styles.gridContainer}>
          {products.map((product, index) => (
            <View key={index} style={styles.gridItem}>
              <Image
                style={styles.image}
                src={product.imageUrl}
              />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productInfo}>Unit Size: {product.unitSize}</Text>
              <Text style={styles.productInfo}>Case Size: {product.caseSize}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default CatalogGridPDF;

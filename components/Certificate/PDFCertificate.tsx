import {
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { APP_NAME, BASE_URL } from "config";
import { ICertificate } from "models/certificate.model";
import React from "react";

Font.register({
  family: "techathonRegular",
  src: "/fonts/Geomanist-Regular.woff",
});
Font.register({
  family: "techathonMedium",
  src: "/fonts/Geomanist-Medium.woff",
});
Font.register({
  family: "techathonBold",
  src: "/fonts/Geomanist-Bold.woff",
});
Font.register({
  family: "techathonBook",
  src: "/fonts/Geomanist-Book.woff",
});

const styles = StyleSheet.create({
  page: {
    position: "relative",
  },
  bg: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
  container: {
    padding: 90,
     paddingTop: 70,
    paddingBottom: 8,
  },
  information: {
    marginBottom: 8,
    marginTop: 15,
  },
  logo: {
    width: 150,
  },
  heading1: {
    fontFamily: "techathonBold",
    fontSize:37,
    color: "#32376F",
    marginBottom: 8,
   textTransform: "uppercase",
    
  },
  heading2: {
    fontFamily: "techathonMedium",
    fontSize: 28,
    color: "#32376F",
    marginBottom: 8,
     textTransform: "capitalize",
        

  },
  heading3: {
    fontFamily: "techathonRegular",
    color: "#32376F",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 9,
    //This is the original style for the texr 'The Programme includes'
  },
    menteeName: {
    fontFamily: "techathonMedium",
    color: "#32376F",
    fontSize: 28,
//     fontWeight: "bold",
    marginBottom: 9,
    textTransform: "capitalize",

    //This is the original style for the texr 'The Programme includes'
  },
  heading4: {
    fontFamily: "techathonBook",
//       opacity: 0.9,
    // textDecoration: "underline",
   
    marginBottom: 11,
    fontWeight: 500,
  },
  text: {
    fontFamily: "techathonRegular",
    color: "#32376F",
    fontSize: 16,
    marginBottom: 8,
  },
  text2: {
    fontSize: 12,
    marginTop: 15,
//     marginBottom: 3,
  },
  skills: {
    fontFamily: "techathonBook",
    
    maxWidth: "75%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skillText: {
    fontFamily: "techathonRegular",
    fontSize: 14,
  },
  signers: {
    maxWidth: "85%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  signerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  signerName: {
    fontFamily: "techathonMedium",
    fontSize: 17,
  },
  signerPost: {
    fontFamily: "techathonBook",
    fontSize: 14,
  },
  signature: {
    width: 90,
  },
  link: {
    color: "#986DF6",
  },
});
interface PDFCertificateProps extends ICertificate {}
const PDFCertificate = (props: PDFCertificateProps) => {
  const {
    fullName,
    menteeID,
    track,
    dateIssued,
    technicalSkills,
    softSkills,
    trainingName,
  } = props;
  return (
    <Document
      title={`${APP_NAME}_${fullName
        .toLowerCase()
        .split(" ")
        .join("_")}_certificate`}
      creator={APP_NAME}
    >
      <Page size="A4" orientation="landscape">
        <Image style={styles.bg} src="/techathon_certificate_cover.jpg" />
        <View style={styles.container}>
          <Image style={styles.logo} src="/logo.png" />
          <View style={styles.information}>
            <Text style={styles.heading1}>Certificate of Completion</Text>
            <Text style={styles.text}>This is to certify that</Text>
            <Text style={styles.heading2}>{fullName}</Text>
            <Text style={styles.text}>has successfully completed</Text>
            <Text style={styles.heading2}>{trainingName}</Text>
            <Text style={[styles.text, styles.heading4]}>The Programme includes</Text>
          </View>
          <View style={styles.skills}>
            <View>
              <Text style={[styles.text, styles.heading4]}>
                Technical Skills
              </Text>
              {technicalSkills.map((skill, i) => (
                <Text key={skill + i} style={[styles.text, styles.skillText]}>
                  {skill}
                </Text>
              ))}
            </View>
            <View>
              <Text style={[styles.text, styles.heading4]}>Soft Skills</Text>
              {softSkills.map((skill, i) => (
                <Text key={skill + i} style={[styles.text, styles.skillText]}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.signers}>
            <View style={styles.signerWrapper}>
              <Image src="/signature_founder.png" style={styles.signature} />
              <Text style={[styles.text, styles.signerName]}>
                Onyearizo Wisdom
              </Text>
              <Text style={[styles.text, styles.signerPost]}>
                Founder/CEO, Techathon Community
              </Text>
            </View>
            <View style={styles.signerWrapper}>
              <Image src="/signature_manager.png" style={styles.signature} />
              <Text style={[styles.text, styles.signerName]}>Cynthia Nwankwo</Text>
              <Text style={[styles.text, styles.signerPost]}>
                Learning Manager, Techathon Community
              </Text>
            </View>
          </View>
          <View>
            <Text style={[styles.text, styles.text2]}>
              <Text style={{ fontFamily: "techathonMedium" }}>ISSUED ON:</Text>{" "}
                {dateIssued}
            </Text>
          </View>
          <Text style={[styles.text, { fontSize: 9, marginTop: 0, marginBottom: 5 }]}>
            Verify this Proof of Completion by visiting{" "}
            <Text style={styles.link}>{`${BASE_URL}/${menteeID}`}</Text>
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFCertificate;

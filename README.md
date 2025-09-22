# QR Code Generator

## Overview
QRGenerator is a simple and free web application designed to help users create customized QR codes quickly and easily. The application allows users to input text or URLs, customize the appearance of the QR code, and download the generated QR code along with additional information.

## Features
- User-friendly interface for generating QR codes.
- Customizable QR code colors and styles.
- Preview of the generated QR code before downloading.
- Option to add titles, subtitles, and additional information to the QR code.

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/QRGenerator.git
   cd QRGenerator
   ```

2. **Open the `index.html` File**
   You can open the `index.html` file in any web browser to start using the QR code generator.

## Usage
- Enter the text or URL you want to encode in the QR code.
- Choose the foreground and background colors for the QR code.
- Select the style of the QR code (squares, dots, rounded, etc.).
- Fill in the optional title, subtitle, and additional information fields.
- Click the "Générer" button to create the QR code.
- Preview the QR code and click the "Télécharger avec infos" button to download the QR code image.

## Connecting to a Database
The current setup is a static HTML application and does not include backend functionality. To connect the app to a database, you will need to implement a backend server using a technology such as Node.js or Python. This server can handle requests and interact with a database (e.g., Azure SQL Database, Cosmos DB).

Once the backend is implemented, you can deploy both the frontend and backend to Microsoft Azure, ensuring they can communicate with each other.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
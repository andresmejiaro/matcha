CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255) UNIQUE NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    EmailVerified BOOLEAN DEFAULT FALSE,
    DateJoined TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LastLogin TIMESTAMP
);

CREATE TABLE UserProfiles (
    ProfileID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Gender ENUM('Male', 'Female', 'Other'),
    DateOfBirth DATE,
    Bio TEXT,
    InterestedInMen BOOLEAN DEFAULT FALSE,
    InterestedInWomen BOOLEAN DEFAULT FALSE,
    InterestedInOther BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE UserPictures (
    PictureID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    PictureURL VARCHAR(255),
    IsPrimary BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Interests (
    InterestID INT AUTO_INCREMENT PRIMARY KEY,
    InterestName VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE UserInterests (
    UserInterestID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    InterestID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (InterestID) REFERENCES Interests(InterestID)
);

CREATE TABLE SelfReportedLocations (
    LocationID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    City VARCHAR(255),
    Country VARCHAR(255),
    UpdateDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE DeviceLocations (
    LocationID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Latitude DECIMAL(10, 7),
    Longitude DECIMAL(10, 7),
    UpdateDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE IPLocations (
    LocationID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Latitude DECIMAL(10, 7),
    Longitude DECIMAL(10, 7),
    Country VARCHAR(255),
    UpdateDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE BlockedUsers (
    BlockID INT AUTO_INCREMENT PRIMARY KEY,
    SrcUserID INT,
    TargetUserID INT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (SrcUserID) REFERENCES Users(UserID),
    FOREIGN KEY (TargetUserID) REFERENCES Users(UserID)
);

CREATE TABLE LikedUsers (
    LikeID INT AUTO_INCREMENT PRIMARY KEY,
    SrcUserID INT,
    TargetUserID INT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (SrcUserID) REFERENCES Users(UserID),
    FOREIGN KEY (TargetUserID) REFERENCES Users(UserID)
);

CREATE TABLE Messages (
    MessageID INT AUTO_INCREMENT PRIMARY KEY,
    SenderID INT,
    ReceiverID INT,
    MessageContent TEXT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ReadStatus BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (SenderID) REFERENCES Users(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES Users(UserID)
);

CREATE TABLE Notifications (
    NotificationID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    NotificationType ENUM('Message', 'Match', 'ProfileView', 'Like'),
    Message TEXT,
    SeenStatus BOOLEAN DEFAULT FALSE,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE FameRatings (
    UserID INT PRIMARY KEY,
    FameScore INT DEFAULT 0,
    LastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE ProfileViews (
    ViewID INT AUTO_INCREMENT PRIMARY KEY,
    ViewerID INT,
    ViewedUserID INT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ViewerID) REFERENCES Users(UserID),
    FOREIGN KEY (ViewedUserID) REFERENCES Users(UserID)
);

CREATE TABLE UserConnections (
    UserID INT PRIMARY KEY,
    IsOnline BOOLEAN DEFAULT FALSE,
    LastOnline TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Reports (
    ReportID INT AUTO_INCREMENT PRIMARY KEY,
    ReporterUserID INT,
    ReportedUserID INT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Status ENUM('Pending', 'Reviewed', 'Resolved') DEFAULT 'Pending',
    FOREIGN KEY (ReporterUserID) REFERENCES Users(UserID),
    FOREIGN KEY (ReportedUserID) REFERENCES Users(UserID)
);

CREATE TABLE Events (
    EventID INT AUTO_INCREMENT PRIMARY KEY,
    CreatorUserID INT,
    CreatedTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    EventName VARCHAR(255),
    EventDateTime DATETIME,
    Location VARCHAR(255),
    PhotoURL VARCHAR(255),
    Description TEXT,
    MaxParticipants INT,
    Status ENUM('Scheduled', 'Cancelled', 'Completed') DEFAULT 'Scheduled',
    FOREIGN KEY (CreatorUserID) REFERENCES Users(UserID)
);

CREATE TABLE EventSubscriptions (
    SubscriptionID INT AUTO_INCREMENT PRIMARY KEY,
    EventID INT,
    UserID INT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (EventID) REFERENCES Events(EventID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

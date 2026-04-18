import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;
  public type RecordId = Common.RecordId;

  public type FileType = {
    #Prescription;
    #TestReport;
    #Xray;
    #Insurance;
    #DoctorNote;
    #Other;
  };

  public type MedicalRecord = {
    id : RecordId;
    fileKey : Text;
    fileName : Text;
    fileSize : Nat;
    fileType : FileType;
    doctorName : Text;
    hospitalName : Text;
    visitDate : Text;
    uploadedAt : Timestamp;
    notes : ?Text;
  };

  public type MedicalRecordInput = {
    fileKey : Text;
    fileName : Text;
    fileSize : Nat;
    fileType : FileType;
    doctorName : Text;
    hospitalName : Text;
    visitDate : Text;
    notes : ?Text;
  };
};

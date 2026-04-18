import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  public type Profile = {
    userId : UserId;
    var name : Text;
    var dateOfBirth : Text;
    var email : Text;
    var emergencyContactName : Text;
    var emergencyContactPhone : Text;
    updatedAt : Timestamp;
  };

  public type ProfileView = {
    userId : UserId;
    name : Text;
    dateOfBirth : Text;
    email : Text;
    emergencyContactName : Text;
    emergencyContactPhone : Text;
    updatedAt : Timestamp;
  };

  public type ProfileInput = {
    name : Text;
    dateOfBirth : Text;
    email : Text;
    emergencyContactName : Text;
    emergencyContactPhone : Text;
  };
};

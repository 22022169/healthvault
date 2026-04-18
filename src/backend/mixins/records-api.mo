import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import RecordsLib "../lib/records";
import Types "../types/records";

mixin (recordsMap : RecordsLib.RecordsMap, nextRecordId : Nat) {

  public shared ({ caller }) func listMyRecords() : async [Types.MedicalRecord] {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func getMyRecord(recordId : Types.RecordId) : async ?Types.MedicalRecord {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func createMedicalRecord(input : Types.MedicalRecordInput) : async Types.MedicalRecord {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func deleteMedicalRecord(recordId : Types.RecordId) : async Bool {
    Runtime.trap("not implemented");
  };

};

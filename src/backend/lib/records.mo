import Map "mo:core/Map";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Types "../types/records";
import Common "../types/common";

module {
  public type RecordsMap = Map.Map<Types.UserId, List.List<Types.MedicalRecord>>;

  public func listRecords(recordsMap : RecordsMap, userId : Types.UserId) : [Types.MedicalRecord] {
    Runtime.trap("not implemented");
  };

  public func getRecord(recordsMap : RecordsMap, userId : Types.UserId, recordId : Types.RecordId) : ?Types.MedicalRecord {
    Runtime.trap("not implemented");
  };

  public func createRecord(recordsMap : RecordsMap, userId : Types.UserId, nextId : Nat, input : Types.MedicalRecordInput) : Types.MedicalRecord {
    Runtime.trap("not implemented");
  };

  public func deleteRecord(recordsMap : RecordsMap, userId : Types.UserId, recordId : Types.RecordId) : Bool {
    Runtime.trap("not implemented");
  };
};

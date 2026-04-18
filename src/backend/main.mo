import Map "mo:core/Map";
import List "mo:core/List";
import ProfileLib "lib/profile";
import RecordsLib "lib/records";
import ProfileTypes "types/profile";
import RecordsTypes "types/records";
import ProfileApi "mixins/profile-api";
import RecordsApi "mixins/records-api";

actor {
  let profiles : ProfileLib.ProfileMap = Map.empty<ProfileTypes.UserId, ProfileTypes.Profile>();
  let recordsMap : RecordsLib.RecordsMap = Map.empty<RecordsTypes.UserId, List.List<RecordsTypes.MedicalRecord>>();
  var nextRecordId : Nat = 0;

  include ProfileApi(profiles);
  include RecordsApi(recordsMap, nextRecordId);
};

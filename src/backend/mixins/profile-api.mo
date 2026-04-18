import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import ProfileLib "../lib/profile";
import Types "../types/profile";

mixin (profiles : ProfileLib.ProfileMap) {

  public shared ({ caller }) func getMyProfile() : async ?Types.ProfileView {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func upsertMyProfile(input : Types.ProfileInput) : async Types.ProfileView {
    Runtime.trap("not implemented");
  };

};

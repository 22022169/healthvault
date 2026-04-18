import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Types "../types/profile";

module {
  public type ProfileMap = Map.Map<Types.UserId, Types.Profile>;

  public func getProfile(profiles : ProfileMap, userId : Types.UserId) : ?Types.ProfileView {
    Runtime.trap("not implemented");
  };

  public func upsertProfile(profiles : ProfileMap, userId : Types.UserId, input : Types.ProfileInput) : Types.ProfileView {
    Runtime.trap("not implemented");
  };

  public func toView(profile : Types.Profile) : Types.ProfileView {
    Runtime.trap("not implemented");
  };
};

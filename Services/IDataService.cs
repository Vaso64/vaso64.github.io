using Portfolio.Model;

namespace Portfolio.Services;

public interface IDataService
{
    Task InitializeAsync();
    IEnumerable<Skill> Skills { get; }
    IEnumerable<Project> Projects { get; }
    IEnumerable<Experience> Experiences { get; }
}
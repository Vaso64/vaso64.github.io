using Portfolio.Model;
using System.Net.Http.Json;


namespace Portfolio.Services;

public class DataService(HttpClient httpClient) : IDataService
{
    private List<Skill>      _skills = [];
    private List<Project>    _projects = [];
    private List<Experience> _experiences = [];

    public IEnumerable<Skill>      Skills      => _skills;
    public IEnumerable<Project>    Projects    => _projects;
    public IEnumerable<Experience> Experiences => _experiences;


    public async Task InitializeAsync()
    {
        _skills      = await httpClient.GetFromJsonAsync<List<Skill>>     ("data/skills.json")      ?? [];
        _projects    = await httpClient.GetFromJsonAsync<List<Project>>   ("data/projects.json")    ?? [];
        _experiences = await httpClient.GetFromJsonAsync<List<Experience>>("data/experience.json") ?? [];

        _projects.ForEach(p => p.Skills = _skills.Where(s => p.SkillIds.Contains(s.Id)).ToList());
    }
}